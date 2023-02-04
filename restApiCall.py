from msrestazure.azure_cloud import AZURE_CHINA_CLOUD as CLOUD
from azure.mgmt.resource import SubscriptionClient,ResourceManagementClient
from azure.identity import DefaultAzureCredential, AzureAuthorityHosts
import azure.mgmt.resourcegraph as resourcegraph
import requests

# default scope string 
DEFAULT_SCOPE_STR="/.default"

# SKU Rest API endpint
ENDPOINT = 'https://management.chinacloudapi.cn/subscriptions/{0}/providers/Microsoft.Compute/skus?api-version=2021-07-01'

# 1) create default credential
credential = DefaultAzureCredential(
        authority=AzureAuthorityHosts.AZURE_CHINA,
        exclude_interactive_browser_credential=False,
        exclude_managed_identity_credential=True,
        exclude_shared_token_cache_credential=True,
        exclude_visual_studio_code_credential=True,
        exclude_visual_studio_credential=True)

# create subscription client
subscription_client = SubscriptionClient(
    credential,
    base_url=CLOUD.endpoints.resource_manager,
    credential_scopes=[CLOUD.endpoints.resource_manager + DEFAULT_SCOPE_STR])

# Get subscription list
subs_raw = []
for _sub in subscription_client.subscriptions.list():
    subs_raw.append(_sub.as_dict())
# 2) Get list of subscription IDs
subs_list = []
for sub in subs_raw:
    subs_list.append(sub.get('subscription_id'))

scope= CLOUD.endpoints.management + DEFAULT_SCOPE_STR

# 3) get token
token = credential.get_token(scope)

headers = {
    'Authorization': 'Bearer ' + token.token
}

url = ENDPOINT.format(subs_list[0])

# 4) call rest api of SKU
api_response = requests.get(url, headers=headers)

print(api_response.text)
