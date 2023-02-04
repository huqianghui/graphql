from msrestazure.azure_cloud import AZURE_CHINA_CLOUD as CLOUD
from azure.mgmt.resource import ResourceManagementClient, SubscriptionClient
from azure.identity import DefaultAzureCredential, AzureAuthorityHosts
import azure.mgmt.resourcegraph as resourcegraph

# Assumes the subscription ID and tenant ID to use are in the AZURE_SUBSCRIPTION_ID and
# AZURE_TENANT_ID environment variables
# subscription_id = "1cd97fb0-b4d6-4a11-afb6-fc8410e9ca87"
# tenant_id = "2f72f96c-65f9-4a6a-b166-dd61493e4b2e"

# When using sovereign domains (that is, any cloud other than AZURE_PUBLIC_CLOUD),
# you must use an authority with DefaultAzureCredential.
credential = DefaultAzureCredential(authority=AzureAuthorityHosts.AZURE_CHINA,exclude_interactive_browser_credential=False,exclude_managed_identity_credential=True,exclude_shared_token_cache_credential=True,exclude_visual_studio_code_credential=True,exclude_visual_studio_credential=True)

resource_client = ResourceManagementClient(
    credential,
    base_url=CLOUD.endpoints.resource_manager,
    credential_scopes=[CLOUD.endpoints.resource_manager + "/.default"])

subscription_client = SubscriptionClient(
    credential,
    base_url=CLOUD.endpoints.resource_manager,
    credential_scopes=[CLOUD.endpoints.resource_manager + "/.default"])

subsRaw = []
for sub in subscription_client.subscriptions.list():
    subsRaw.append(sub.as_dict())

# print(subsRaw)


subsList = []
for sub in subsRaw:
    subsList.append(sub.get('subscription_id'))

# print(subsList)

# Create Azure Resource Graph client and set options
resourceGraph_client = resourcegraph.ResourceGraphClient(credential,
                                base_url=CLOUD.endpoints.resource_manager,
                                credential_scopes=[CLOUD.endpoints.resource_manager + "/.default"])

argQueryOptions = resourcegraph.models.QueryRequestOptions(result_format="objectArray")

argQuery = resourcegraph.models.QueryRequest(subscriptions=subsList, query="Resources | project name, type | limit 5", options=argQueryOptions)

argResults = resourceGraph_client.resources(argQuery)

print(argResults)