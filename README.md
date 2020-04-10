graphql 作为facebook开源的一个API协议，初衷是解决移动端请求次数过多，造成相应慢的技术。
现在已经转化为对rest API的一个补充，可以充当一个数据的网关。把各个微服务的模型和服务在graqhQL中进行一个组装，让数据更加精简，请求更加高效

本地是java的graphql的例子。

启动之后可以访问两个endpoint：

1）交互式的查询平台

http://localhost:8080/graphiql

2）模型关系查询

http://localhost:8080/voyager

