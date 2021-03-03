Search.setIndex({docnames:["glossary","grpc","grpc_asyncio","grpc_channelz","grpc_health_checking","grpc_reflection","grpc_status","grpc_testing","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["glossary.rst","grpc.rst","grpc_asyncio.rst","grpc_channelz.rst","grpc_health_checking.rst","grpc_reflection.rst","grpc_status.rst","grpc_testing.rst","index.rst"],objects:{"":{grpc:[1,0,0,"-"],grpc_testing:[7,0,0,"-"]},"grpc.AuthMetadataContext":{method_name:[1,2,1,""],service_url:[1,2,1,""]},"grpc.AuthMetadataPlugin":{__call__:[1,3,1,""]},"grpc.AuthMetadataPluginCallback":{__call__:[1,3,1,""]},"grpc.Call":{code:[1,3,1,""],details:[1,3,1,""],initial_metadata:[1,3,1,""],trailing_metadata:[1,3,1,""]},"grpc.Channel":{__enter__:[1,3,1,""],__exit__:[1,3,1,""],close:[1,3,1,""],stream_stream:[1,3,1,""],stream_unary:[1,3,1,""],subscribe:[1,3,1,""],unary_stream:[1,3,1,""],unary_unary:[1,3,1,""],unsubscribe:[1,3,1,""]},"grpc.ChannelConnectivity":{CONNECTING:[1,2,1,""],IDLE:[1,2,1,""],READY:[1,2,1,""],SHUTDOWN:[1,2,1,""],TRANSIENT_FAILURE:[1,2,1,""]},"grpc.ClientCallDetails":{compression:[1,2,1,""],credentials:[1,2,1,""],metadata:[1,2,1,""],method:[1,2,1,""],timeout:[1,2,1,""],wait_for_ready:[1,2,1,""]},"grpc.Compression":{Deflate:[1,2,1,""],Gzip:[1,2,1,""],NoCompression:[1,2,1,""]},"grpc.Future":{add_done_callback:[1,3,1,""],cancel:[1,3,1,""],cancelled:[1,3,1,""],done:[1,3,1,""],exception:[1,3,1,""],result:[1,3,1,""],running:[1,3,1,""],traceback:[1,3,1,""]},"grpc.GenericRpcHandler":{service:[1,3,1,""]},"grpc.HandlerCallDetails":{invocation_metadata:[1,2,1,""],method:[1,2,1,""]},"grpc.LocalConnectionType":{LOCAL_TCP:[1,2,1,""],UDS:[1,2,1,""]},"grpc.RpcContext":{add_callback:[1,3,1,""],cancel:[1,3,1,""],is_active:[1,3,1,""],time_remaining:[1,3,1,""]},"grpc.RpcMethodHandler":{request_deserializer:[1,2,1,""],request_streaming:[1,2,1,""],response_serializer:[1,2,1,""],response_streaming:[1,2,1,""],stream_stream:[1,2,1,""],stream_unary:[1,2,1,""],unary_stream:[1,2,1,""],unary_unary:[1,2,1,""]},"grpc.Server":{add_generic_rpc_handlers:[1,3,1,""],add_insecure_port:[1,3,1,""],add_secure_port:[1,3,1,""],start:[1,3,1,""],stop:[1,3,1,""],wait_for_termination:[1,3,1,""]},"grpc.ServerInterceptor":{intercept_service:[1,3,1,""]},"grpc.ServiceRpcHandler":{service_name:[1,3,1,""]},"grpc.ServicerContext":{abort:[1,3,1,""],abort_with_status:[1,3,1,""],auth_context:[1,3,1,""],disable_next_message_compression:[1,3,1,""],invocation_metadata:[1,3,1,""],peer:[1,3,1,""],peer_identities:[1,3,1,""],peer_identity_key:[1,3,1,""],send_initial_metadata:[1,3,1,""],set_code:[1,3,1,""],set_compression:[1,3,1,""],set_details:[1,3,1,""],set_trailing_metadata:[1,3,1,""]},"grpc.StatusCode":{ABORTED:[1,2,1,""],ALREADY_EXISTS:[1,2,1,""],CANCELLED:[1,2,1,""],DATA_LOSS:[1,2,1,""],DEADLINE_EXCEEDED:[1,2,1,""],FAILED_PRECONDITION:[1,2,1,""],INTERNAL:[1,2,1,""],INVALID_ARGUMENT:[1,2,1,""],NOT_FOUND:[1,2,1,""],OK:[1,2,1,""],PERMISSION_DENIED:[1,2,1,""],RESOURCE_EXHAUSTED:[1,2,1,""],UNAUTHENTICATED:[1,2,1,""],UNAVAILABLE:[1,2,1,""],UNIMPLEMENTED:[1,2,1,""],UNKNOWN:[1,2,1,""]},"grpc.StreamStreamClientInterceptor":{intercept_stream_stream:[1,3,1,""]},"grpc.StreamStreamMultiCallable":{__call__:[1,3,1,""]},"grpc.StreamUnaryClientInterceptor":{intercept_stream_unary:[1,3,1,""]},"grpc.StreamUnaryMultiCallable":{__call__:[1,3,1,""],future:[1,3,1,""],with_call:[1,3,1,""]},"grpc.UnaryStreamClientInterceptor":{intercept_unary_stream:[1,3,1,""]},"grpc.UnaryStreamMultiCallable":{__call__:[1,3,1,""]},"grpc.UnaryUnaryClientInterceptor":{intercept_unary_unary:[1,3,1,""]},"grpc.UnaryUnaryMultiCallable":{__call__:[1,3,1,""],future:[1,3,1,""],with_call:[1,3,1,""]},"grpc.aio":{AbortError:[2,4,1,""],AioRpcError:[2,4,1,""],BaseError:[2,4,1,""],Call:[2,1,1,""],Channel:[2,1,1,""],ClientCallDetails:[2,1,1,""],ClientInterceptor:[2,1,1,""],InterceptedUnaryUnaryCall:[2,1,1,""],InternalError:[2,4,1,""],RpcContext:[2,1,1,""],Server:[2,1,1,""],ServerInterceptor:[2,1,1,""],ServicerContext:[2,1,1,""],StreamStreamCall:[2,1,1,""],StreamStreamClientInterceptor:[2,1,1,""],StreamStreamMultiCallable:[2,1,1,""],StreamUnaryCall:[2,1,1,""],StreamUnaryClientInterceptor:[2,1,1,""],StreamUnaryMultiCallable:[2,1,1,""],UnaryStreamCall:[2,1,1,""],UnaryStreamClientInterceptor:[2,1,1,""],UnaryStreamMultiCallable:[2,1,1,""],UnaryUnaryCall:[2,1,1,""],UnaryUnaryClientInterceptor:[2,1,1,""],UnaryUnaryMultiCallable:[2,1,1,""],UsageError:[2,4,1,""],insecure_channel:[2,5,1,""],secure_channel:[2,5,1,""],server:[2,5,1,""]},"grpc.aio.AioRpcError":{code:[2,3,1,""],debug_error_string:[2,3,1,""],details:[2,3,1,""],initial_metadata:[2,3,1,""],trailing_metadata:[2,3,1,""]},"grpc.aio.Call":{code:[2,3,1,""],details:[2,3,1,""],initial_metadata:[2,3,1,""],trailing_metadata:[2,3,1,""],wait_for_connection:[2,3,1,""]},"grpc.aio.Channel":{__aenter__:[2,3,1,""],__aexit__:[2,3,1,""],channel_ready:[2,3,1,""],close:[2,3,1,""],get_state:[2,3,1,""],stream_stream:[2,3,1,""],stream_unary:[2,3,1,""],unary_stream:[2,3,1,""],unary_unary:[2,3,1,""],wait_for_state_change:[2,3,1,""]},"grpc.aio.InterceptedUnaryUnaryCall":{time_remaining:[2,3,1,""]},"grpc.aio.RpcContext":{add_done_callback:[2,3,1,""],cancel:[2,3,1,""],cancelled:[2,3,1,""],done:[2,3,1,""],time_remaining:[2,3,1,""]},"grpc.aio.Server":{add_generic_rpc_handlers:[2,3,1,""],add_insecure_port:[2,3,1,""],add_secure_port:[2,3,1,""],start:[2,3,1,""],stop:[2,3,1,""],wait_for_termination:[2,3,1,""]},"grpc.aio.ServerInterceptor":{intercept_service:[2,3,1,""]},"grpc.aio.ServicerContext":{abort:[2,3,1,""],auth_context:[2,3,1,""],disable_next_message_compression:[2,3,1,""],invocation_metadata:[2,3,1,""],peer:[2,3,1,""],peer_identities:[2,3,1,""],peer_identity_key:[2,3,1,""],read:[2,3,1,""],send_initial_metadata:[2,3,1,""],set_code:[2,3,1,""],set_compression:[2,3,1,""],set_details:[2,3,1,""],set_trailing_metadata:[2,3,1,""],write:[2,3,1,""]},"grpc.aio.StreamStreamCall":{__aiter__:[2,3,1,""],done_writing:[2,3,1,""],read:[2,3,1,""],write:[2,3,1,""]},"grpc.aio.StreamStreamClientInterceptor":{intercept_stream_stream:[2,3,1,""]},"grpc.aio.StreamStreamMultiCallable":{__call__:[2,3,1,""]},"grpc.aio.StreamUnaryCall":{__await__:[2,3,1,""],done_writing:[2,3,1,""],write:[2,3,1,""]},"grpc.aio.StreamUnaryClientInterceptor":{intercept_stream_unary:[2,3,1,""]},"grpc.aio.StreamUnaryMultiCallable":{__call__:[2,3,1,""]},"grpc.aio.UnaryStreamCall":{__aiter__:[2,3,1,""],read:[2,3,1,""]},"grpc.aio.UnaryStreamClientInterceptor":{intercept_unary_stream:[2,3,1,""]},"grpc.aio.UnaryStreamMultiCallable":{__call__:[2,3,1,""]},"grpc.aio.UnaryUnaryCall":{__await__:[2,3,1,""]},"grpc.aio.UnaryUnaryClientInterceptor":{intercept_unary_unary:[2,3,1,""]},"grpc.aio.UnaryUnaryMultiCallable":{__call__:[2,3,1,""]},"grpc_channelz.v1":{channelz:[3,0,0,"-"]},"grpc_channelz.v1.channelz":{ChannelzServicer:[3,1,1,""],add_channelz_servicer:[3,5,1,""]},"grpc_channelz.v1.channelz.ChannelzServicer":{GetChannel:[3,3,1,""],GetServer:[3,3,1,""],GetServerSockets:[3,3,1,""],GetServers:[3,3,1,""],GetSocket:[3,3,1,""],GetSubchannel:[3,3,1,""],GetTopChannels:[3,3,1,""]},"grpc_health.v1.health":{HealthServicer:[4,1,1,""]},"grpc_health.v1.health.HealthServicer":{Check:[4,3,1,""],Watch:[4,3,1,""],enter_graceful_shutdown:[4,3,1,""],set:[4,3,1,""]},"grpc_reflection.v1alpha":{reflection:[5,0,0,"-"]},"grpc_reflection.v1alpha.reflection":{ReflectionServicer:[5,1,1,""],enable_server_reflection:[5,5,1,""]},"grpc_reflection.v1alpha.reflection.ReflectionServicer":{ServerReflectionInfo:[5,3,1,""]},"grpc_status.rpc_status":{from_call:[6,5,1,""],to_status:[6,5,1,""]},"grpc_testing.Channel":{take_stream_stream:[7,3,1,""],take_stream_unary:[7,3,1,""],take_unary_stream:[7,3,1,""],take_unary_unary:[7,3,1,""]},"grpc_testing.Server":{invoke_stream_stream:[7,3,1,""],invoke_stream_unary:[7,3,1,""],invoke_unary_stream:[7,3,1,""],invoke_unary_unary:[7,3,1,""]},"grpc_testing.StreamStreamChannelRpc":{cancelled:[7,3,1,""],requests_closed:[7,3,1,""],send_initial_metadata:[7,3,1,""],send_response:[7,3,1,""],take_request:[7,3,1,""],terminate:[7,3,1,""]},"grpc_testing.StreamStreamServerRpc":{cancel:[7,3,1,""],initial_metadata:[7,3,1,""],requests_closed:[7,3,1,""],send_request:[7,3,1,""],take_response:[7,3,1,""],termination:[7,3,1,""]},"grpc_testing.StreamUnaryChannelRpc":{cancelled:[7,3,1,""],requests_closed:[7,3,1,""],send_initial_metadata:[7,3,1,""],take_request:[7,3,1,""],terminate:[7,3,1,""]},"grpc_testing.StreamUnaryServerRpc":{cancel:[7,3,1,""],initial_metadata:[7,3,1,""],requests_closed:[7,3,1,""],send_request:[7,3,1,""],termination:[7,3,1,""]},"grpc_testing.Time":{call_at:[7,3,1,""],call_in:[7,3,1,""],sleep_for:[7,3,1,""],sleep_until:[7,3,1,""],time:[7,3,1,""]},"grpc_testing.UnaryStreamChannelRpc":{cancelled:[7,3,1,""],send_initial_metadata:[7,3,1,""],send_response:[7,3,1,""],terminate:[7,3,1,""]},"grpc_testing.UnaryStreamServerRpc":{cancel:[7,3,1,""],initial_metadata:[7,3,1,""],take_response:[7,3,1,""],termination:[7,3,1,""]},"grpc_testing.UnaryUnaryChannelRpc":{cancelled:[7,3,1,""],send_initial_metadata:[7,3,1,""],terminate:[7,3,1,""]},"grpc_testing.UnaryUnaryServerRpc":{cancel:[7,3,1,""],initial_metadata:[7,3,1,""],termination:[7,3,1,""]},grpc:{AuthMetadataContext:[1,1,1,""],AuthMetadataPlugin:[1,1,1,""],AuthMetadataPluginCallback:[1,1,1,""],Call:[1,1,1,""],CallCredentials:[1,1,1,""],Channel:[1,1,1,""],ChannelConnectivity:[1,1,1,""],ChannelCredentials:[1,1,1,""],ClientCallDetails:[1,1,1,""],Compression:[1,1,1,""],Future:[1,1,1,""],FutureCancelledError:[1,4,1,""],FutureTimeoutError:[1,4,1,""],GenericRpcHandler:[1,1,1,""],HandlerCallDetails:[1,1,1,""],LocalConnectionType:[1,1,1,""],RpcContext:[1,1,1,""],RpcError:[1,4,1,""],RpcMethodHandler:[1,1,1,""],Server:[1,1,1,""],ServerCertificateConfiguration:[1,1,1,""],ServerCredentials:[1,1,1,""],ServerInterceptor:[1,1,1,""],ServiceRpcHandler:[1,1,1,""],ServicerContext:[1,1,1,""],StatusCode:[1,1,1,""],StreamStreamClientInterceptor:[1,1,1,""],StreamStreamMultiCallable:[1,1,1,""],StreamUnaryClientInterceptor:[1,1,1,""],StreamUnaryMultiCallable:[1,1,1,""],UnaryStreamClientInterceptor:[1,1,1,""],UnaryStreamMultiCallable:[1,1,1,""],UnaryUnaryClientInterceptor:[1,1,1,""],UnaryUnaryMultiCallable:[1,1,1,""],access_token_call_credentials:[1,5,1,""],aio:[2,0,0,"-"],channel_ready_future:[1,5,1,""],composite_call_credentials:[1,5,1,""],composite_channel_credentials:[1,5,1,""],compute_engine_channel_credentials:[1,5,1,""],dynamic_ssl_server_credentials:[1,5,1,""],insecure_channel:[1,5,1,""],intercept_channel:[1,5,1,""],local_channel_credentials:[1,5,1,""],local_server_credentials:[1,5,1,""],metadata_call_credentials:[1,5,1,""],method_handlers_generic_handler:[1,5,1,""],protos:[1,5,1,""],protos_and_services:[1,5,1,""],secure_channel:[1,5,1,""],server:[1,5,1,""],services:[1,5,1,""],ssl_channel_credentials:[1,5,1,""],ssl_server_certificate_configuration:[1,5,1,""],ssl_server_credentials:[1,5,1,""],stream_stream_rpc_method_handler:[1,5,1,""],stream_unary_rpc_method_handler:[1,5,1,""],unary_stream_rpc_method_handler:[1,5,1,""],unary_unary_rpc_method_handler:[1,5,1,""]},grpc_status:{rpc_status:[6,0,0,"-"]},grpc_testing:{Channel:[7,1,1,""],Server:[7,1,1,""],StreamStreamChannelRpc:[7,1,1,""],StreamStreamServerRpc:[7,1,1,""],StreamUnaryChannelRpc:[7,1,1,""],StreamUnaryServerRpc:[7,1,1,""],Time:[7,1,1,""],UnaryStreamChannelRpc:[7,1,1,""],UnaryStreamServerRpc:[7,1,1,""],UnaryUnaryChannelRpc:[7,1,1,""],UnaryUnaryServerRpc:[7,1,1,""],channel:[7,5,1,""],server_from_dictionary:[7,5,1,""],strict_fake_time:[7,5,1,""],strict_real_time:[7,5,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:exception","5":"py:function"},terms:{"10000":1,"abstract":[1,2,7],"boolean":1,"byte":[0,1,2],"case":[1,2],"catch":2,"class":[1,2,3,4,5,7],"default":[0,1,3,5],"enum":4,"final":[1,2],"float":[1,2],"function":[0,1,2],"int":2,"long":7,"new":[1,2,4],"return":[0,1,2,3,6,7],"static":3,"true":[1,2,4],"try":2,"while":1,For:[0,1,2],Not:1,One:1,TLS:1,That:3,The:[0,1,2,3,4,5,7],There:2,UDS:1,Use:1,Used:2,__aenter__:2,__aexit__:2,__aiter__:2,__await__:2,__call__:[1,2],__enter__:1,__exit__:1,__version__:1,_base:2,_base_cal:2,_base_channel:2,_call:2,_cython:2,_eof:2,_interceptor:2,_metadata:2,_pb2:1,_pb2_grpc:[1,7],abort:[1,2],abort_with_statu:1,aborterror:2,about:1,accept:[1,2],access:[1,2,7],access_token:1,access_token_call_credenti:1,account:1,action:[1,2],activ:[1,2],actual:[1,2],add:[1,2,3,7],add_callback:1,add_channelz_servic:3,add_done_callback:[1,2],add_generic_rpc_handl:[1,2],add_insecure_port:[1,2],add_secure_port:[1,2],added:[1,2,3,5,7],adding:3,addit:2,address:[1,2],advanc:[0,7],affect:1,afford:[1,2],after:[1,2,4,7],again:1,aio:2,aiorpcerror:2,aka:2,algorithm:[1,2],all:[1,2,3,4,5,7],allot:1,allow:[0,1,2,3],alreadi:[1,2],already_exist:1,also:[1,2],alt:1,although:[1,2],alwai:[1,2],ani:[0,1,2,4,7],anoth:1,api:[0,1,3,4,6],applic:[0,1,2,3,7],appropri:4,arbitrari:[1,2],arbitrarili:1,architectur:2,arg:2,argument:[0,1,2,7],arriv:1,ascii:0,assert:1,assum:4,async:2,asynchron:[1,2],asyncio:8,asynciter:2,asyncrhon:2,attempt:[1,4],auth:[1,2],auth_context:[1,2],authent:[2,8],authmetadatacontext:1,authmetadataplugin:1,authmetadataplugincallback:1,author:[7,8],avail:[0,1,5],await:2,back:[4,7],backoff:4,balanc:2,base:2,baseerror:2,bearer:1,becam:1,becaus:1,becom:[2,4],been:[0,1,2,7],befor:[0,1,2,7],begin:1,begun:1,behavior:[1,7],behind:1,being:[0,1,2,7],belong:1,best:2,better:1,between:2,beyond:7,bidirect:[2,5],bin:0,binari:0,blob:[0,1,2,3,4,5,6,7,8],block:[1,7,8],bool:[1,2],both:[0,1],broken:1,bug:2,build:2,busi:1,call:[1,2,4,6,7],call_at:7,call_credenti:1,call_in:7,callabl:[0,8],callback:[1,2,7],callcredenti:[1,2],caller:[1,2],can:[0,1,2,3,7],cancel:[1,2,7],cancellederror:2,cannot:[0,1],carefulli:2,caus:7,caveat:8,certain:2,certif:1,certificate_chain:1,certificate_configur:1,certificate_configuration_fetch:1,chain:[1,2],chang:[1,2,4,7],channel:[0,3,7,8],channel_argu:[0,1,2],channel_credenti:1,channel_readi:2,channel_ready_futur:1,channelconnect:[1,2],channelcredenti:[1,2],channelz:8,channelzservic:3,charg:3,check:[1,2,5,8],choos:[1,2],chosen:1,circumst:1,clean:2,client:[0,4,6,7,8],client_call_detail:[1,2],clientcalldetail:[1,2],clientinterceptor:2,close:[1,2,7],cloud:1,code:[3,6,7,8],codegen:[0,1,2,3,4,5,6,7,8],collect:1,com:[0,1,2,3,4,5,6,7,8],commun:[2,6],complet:[1,2],compos:1,composit:1,composite_call_credenti:1,composite_channel_credenti:1,compress:[2,8],comput:[1,2],compute_engine_channel_credenti:1,concurr:[1,2],condit:[1,2],conduct:1,confidenti:1,config:1,configur:[0,1,2],conjunct:1,connect:[0,2,7,8],consid:[1,2],construct:[0,1],consum:[1,2],contain:0,content:8,context:[3,4,5,8],continu:[1,2],control:[1,2],converg:2,convert:6,core:[0,1,2,3],coroutin:2,correspond:[1,6],corrupt:1,could:[1,2],creat:[3,7,8],creation:[1,2],credenti:[2,8],current:[1,2,4,7],custom:[0,1],cygrpc:2,data:1,data_loss:1,date:2,deadlin:[0,1,2],deadline_exceed:1,debug:[1,2,3],debug_error_str:2,decid:[1,2],decod:0,decoupl:1,defin:[1,7],definit:1,deflat:1,delai:7,depend:1,deriv:1,describ:[1,2,7],descript:2,descriptor:7,descriptor_pool:5,descriptorpool:5,descriptors_to_servic:7,deseri:[0,1,2],design:[2,3],detail:[1,2,6,7],determin:[1,2],dictionari:[1,7],did:1,differ:2,dir:1,directli:[1,3],directori:1,disabl:[0,1,2,3],disable_next_message_compress:[1,2],doc:[1,2],document:[0,1,2,3],doe:[1,3,7],doesn:[0,2],domain:1,done:[1,2],done_writ:2,doubl:7,down:0,draw:[1,7],due:1,durat:[1,2,7],dure:[1,2],dynamic_ssl_server_credenti:1,each:[1,2],effect:[1,2],either:[0,1,7],element:[1,2],elimin:1,els:3,emit:7,enabl:[1,2,3,5,7],enable_channelz:3,enable_server_reflect:5,encapsul:[1,2],encod:[0,1,2],encrypt:1,end:[0,1,2,7],endpoint:[1,2],engin:1,ensur:[2,5,7],enter:[1,2,4],enter_graceful_shutdown:4,entir:[1,2,3],entiti:1,entri:[0,1],enumer:1,environ:1,eof:2,equival:[1,2],error:[1,2],etc:[1,2],even:[0,2],event:[1,2],eventu:2,everi:[1,2],exactli:1,exampl:[0,1,2,8],exc_tb:[1,2],exc_typ:[1,2],exc_val:[1,2],except:8,execut:[1,2,7],executor:2,exhaust:1,exist:[1,2,3],exit:[1,2],expect:[1,2],experiment:[0,1,2,3,4,6],experimental_non_block:4,experimental_thread_pool:4,expir:1,explain:2,exponenti:4,extens:2,fail:[0,1,2,4],failed_precondit:1,failur:[1,2],fals:[1,2],fast:0,feel:2,fetch:1,file:[0,1],filesystem:1,finish:[1,2],finsh:2,first:0,fixtur:7,flag:[1,2],flow:[1,2],follow:[1,2],foo:1,form:1,format:[1,2],forward:[1,2],found:[0,1,2],free:2,from:[1,2,3,7],from_cal:6,full:0,fulli:[1,5],further:2,futur:[2,4,7,8],futurecancellederror:1,futuretimeouterror:1,gain:1,gcp:1,gener:[1,2,7],generic_rpc_handl:[1,2],genericrpchandl:[1,2],get:[1,2,3],get_stat:2,getchannel:3,getserv:3,getserversocket:3,getsocket:3,getsubchannel:3,gettopchannel:3,github:[0,1,2,3,4,5,6,7,8],given:[1,2,6,7],glossari:8,goe:[1,2],googl:[1,6],grace:[1,2,4],grfc:2,grpc:0,grpc_arg_kei:0,grpc_channelz:3,grpc_connectivity_st:1,grpc_health:4,grpc_python_disable_dynamic_stub:1,grpc_reflect:5,grpc_statu:6,grpc_status_cod:1,grpc_test:7,grpc_type:[0,1,2,3,4,5,6,7,8],guarante:2,gzip:[1,2],hand:[1,2],handl:[1,3,4,5],handler:[0,2,8],handler_call_detail:[1,2],handlercalldetail:[1,2],handshak:1,happen:2,has:[0,1,2,3,7],have:[0,1,2,7],haven:2,header:[0,1],health:8,healthcheckrespons:4,healthservic:4,held:[1,2],henc:2,here:2,hood:2,html:[1,2],http:[0,1,2,3,4,5,6,7,8],idempot:[1,2],ident:[1,2],identifi:[1,2,7],idl:[0,1],ignor:4,immedi:[0,1,2,4],impl:[0,1,2,3,4,5,6,7,8],implement:[1,2,3,5,6,7],imposs:1,inappropri:2,inbound:0,includ:[0,1,2,3,4,5,6,7,8],incom:[1,2],inconsist:6,independ:7,index:8,indic:[1,2,4,7],infinit:1,info:[1,3],inform:[1,2,3],inher:2,initi:[1,2,7],initial_certificate_configur:1,initial_metadata:[1,2,7],input:[0,6],insecur:[1,2],insecure_channel:[1,2],insid:[3,6],inspect:1,instanc:[1,2,6,7],instanti:2,integ:[1,2],intercept:[1,2],intercept_channel:1,intercept_servic:[1,2],intercept_stream_stream:[1,2],intercept_stream_unari:[1,2],intercept_unary_stream:[1,2],intercept_unary_unari:[1,2],interceptedunaryunarycal:2,interceptor:8,interfac:[7,8],intern:[1,7],internalerror:2,interpret:7,invalid:1,invalid_argu:1,invari:1,invoc:[1,2,7],invocation_metadata:[1,2,7],invok:[0,1,2,4,7],invoke_stream_stream:7,invoke_stream_unari:7,invoke_unary_stream:7,invoke_unary_unari:7,is_act:[1,7],isn:0,isol:3,issu:[0,1,2],iter:[1,2,5,7],its:[1,2,7],just:1,kei:[0,1,2],known:[0,2,4],kwd:2,label:0,languag:2,larger:[1,2],last:[1,2],last_observed_st:2,later:[1,2],layer:1,least:1,length:[1,2,7],level:[1,3],librari:[0,1,2],lifetim:[1,2],like:[0,1,2],limit:[1,2,7],list:[0,1,2],live:7,load:2,local:[2,8],local_channel_credenti:1,local_connect_typ:1,local_server_credenti:1,local_tcp:1,localconnectiontyp:1,localhost:1,locat:1,log:1,logic:[1,2],longer:2,lookup:[1,2],loop:2,loss:1,machin:1,machineri:1,made:7,mai:[0,1,2,7],maintain:7,make:[1,2],manag:[1,2],mani:[1,2],manipul:[1,2,7],map:[1,2,6],matur:1,maximum:[1,2],maximum_concurrent_rpc:[1,2],mean:[1,3],meant:0,mechan:[1,2],mere:1,messag:[0,1,2,4,6,7],met:[1,2],metadata:[0,1,2,7],metadata_call_credenti:1,metadata_plugin:1,metadatum:0,method:[2,4,7,8],method_descriptor:7,method_handl:1,method_handlers_generic_handl:1,method_nam:1,methoddescriptor:7,migrat:2,migration_thread_pool:2,mirror:1,mix:2,modul:8,moment:0,monitor:1,more:[1,2,7],most:[1,2],move:[1,2],multi:8,multipl:[1,2],must:[0,1,2],name:[0,1,2,4,5],nativ:2,need:[1,2],needn:7,network:2,next:[1,2],nocompress:1,non:[1,2,3,6],none:[0,1,2,4,5,7],nonneg:[1,2],nor:3,not_found:[1,3,4],not_serv:4,notifi:2,now:7,number:[1,2],object:[0,5,7,8],observ:[1,2],occur:[1,2],omit:1,onc:[1,2],one:[1,2,7],ones:[1,2],ongo:1,onli:[1,2,7],open:[1,2],oper:[1,2],opposit:1,option:[0,1,2,3],order:[1,2,7],org:[1,2],other:[0,1,4],otherwis:[1,2],our:2,out:[1,2,5],outbound:0,outcom:1,outgo:[1,2],over:[1,2,7],overrid:[1,2],overridden:[1,2],overview:8,page:[1,8],pair:[0,1,2],paramet:[1,2,3,4,5,6,7],pars:8,part:1,pass:[1,2],passag:7,path:1,peer:[1,2],peer_ident:[1,2],peer_identity_kei:[1,2],pem:1,per:1,perform:[2,4],perhap:1,period:[1,2,4],perman:4,permiss:1,permission_deni:1,place:1,plai:7,pleas:2,plugin:1,point:[1,2,4],pool:5,port:[0,1,2],potenti:2,previous:1,print:1,privat:1,private_kei:1,private_key_certificate_chain_pair:1,proce:[1,2],process:[2,3],produc:[1,2],properti:[1,2],proto:1,protobuf:[2,8],protobuf_path:1,protoc:1,protocol:2,protos_and_servic:1,provid:[0,1,2,7],proxi:2,pull:3,purpos:2,put:2,python:[1,2,3,5,6,7],qualifi:[1,5],queri:[3,7],queue:0,quota:1,race:2,rais:[1,2,6],raw:[1,2],reach:[0,2],read:2,readi:[0,2,8],real:7,reason:[0,1,2],receiv:[1,2,4],recommend:2,recov:1,refer:[2,5,6],reflect:8,reflectionservic:5,regist:[1,2,7],reject:1,rel:1,relat:[1,2,5],releas:[1,2,8],reli:1,remain:[1,2],remot:2,replac:[1,2],repo:2,repres:[1,2,6],represent:[1,2,7],request:[1,2,3,4,5,7],request_deseri:1,request_iter:[1,2,5],request_seri:[1,2],request_stream:1,requests_clos:7,requesttyp:2,requir:1,require_client_auth:1,require_client_authent:1,resolut:2,resolv:1,resourc:[1,2],resource_exhaust:[1,2],respect:7,respons:[1,2,3,7],response_deseri:[1,2],response_futur:1,response_iter:1,response_seri:1,response_stream:1,responsetyp:2,restrict:[0,1,2],result:[0,1],retri:[2,4],retriev:1,reus:0,root:[1,3],root_certif:1,rpc:[0,2,3,4,5,6,7,8],rpc_statu:6,rpccontext:[1,2,7],rpcerror:[1,2],rpcmethodhandl:[1,2],run:[1,2],runtim:[2,8],safe:[1,2],safeti:2,same:[0,1,2,7],schedul:1,scope:1,search:8,second:[0,1,2,7],secret:1,section:0,secur:[1,2],secure_channel:[1,2],see:1,seen:1,send:[1,2,4,7],send_initial_metadata:[1,2,7],send_request:7,send_respons:7,send_response_callback:4,sent:[1,2,7],separ:1,sequenc:[0,1,2,7],serial:[0,1,2],serv:[2,4],server:[0,3,4,5,7,8],server_credenti:[1,2],server_from_dictionari:7,servercertificateconfigur:1,servercredenti:[1,2],serverinterceptor:[1,2],serverreflectioninfo:5,servic:[2,3,4,5,7,8],service_descriptor:7,service_nam:[1,5],service_unknown:4,service_url:1,servicedescriptor:7,servicer_context:[1,2],servicercontext:[1,2],servicerpchandl:1,set:[1,2,3,4],set_cod:[1,2],set_compress:[1,2],set_detail:[1,2],set_trailing_metadata:[1,2],setup:1,share:8,should:[1,2,4],shut:0,shutdown:[0,1,4],side:[0,8],signal:[1,2],simul:7,simultan:2,sinc:2,singl:[1,3,5],sleep_for:7,sleep_until:7,smaller:[1,2],snapshot:2,so_reuseport:0,socket:[1,3],some:[0,1,4,7],sooner:[1,2],sort:1,sourc:[1,2,3,4,5,6,7],space:1,specif:[1,7],specifi:[0,1,2],ssl:[1,2],ssl_channel_credenti:1,ssl_server_certificate_configur:1,ssl_server_credenti:1,stabl:2,stack:2,start:[1,2],starv:2,state:[0,1,2],statist:3,statu:[2,4,7,8],status:[3,4,5],statuscod:[1,2],still:[0,2],stop:[1,2],str:[0,2],stream:[1,2,5,7],stream_stream:[1,2],stream_stream_channel_rpc:7,stream_stream_rpc_method_handl:1,stream_unari:[1,2],stream_unary_channel_rpc:7,stream_unary_rpc_method_handl:1,streamstreamcal:2,streamstreamchannelrpc:7,streamstreamclientinterceptor:[1,2],streamstreammultical:[1,2],streamstreamserverrpc:7,streamunarycal:2,streamunarychannelrpc:7,streamunaryclientinterceptor:[1,2],streamunarymultical:[1,2],streamunaryserverrpc:7,strict:7,strict_fake_tim:7,strict_real_tim:7,string:[1,2,4],structur:[1,5],stub:[1,2],style:2,subchannel:3,submit:[0,7],subscrib:1,subscript:1,subsequ:[1,2,4],success:[1,7],successfulli:[1,2],suddenli:1,suggest:2,suitabl:1,superced:[1,2],suppli:1,support:[1,2,4],suppress:2,synchron:1,synthes:7,sys:1,system:[1,7],tailor:2,take:[1,2],take_request:7,take_respons:7,take_stream_stream:7,take_stream_unari:7,take_unary_stream:7,take_unary_unari:7,taken:1,target:[1,2],task:2,tcp:[0,1,2],termin:[1,2,4,6,7],test:[1,8],thei:[1,2],them:[1,2,7],thi:[0,1,2,3,4,5,6,7],those:7,thread:[1,2],thread_pool:1,threadpoolexecutor:[1,2],through:1,throughout:1,thu:1,time:[1,2,7],time_remain:[1,2,7],timeout:[1,2,7],to_statu:6,token:1,top:3,traceback:1,track:1,trail:[1,2,7],trailing_metadata:[1,2,7],transact:1,transient_failur:[0,1],transit:[1,2],transmit:[0,1,2],transport:1,try_to_connect:[1,2],tupl:[0,1,2,7],two:[1,2],type:[2,8],typeerror:1,typic:1,udp:2,unari:[1,2,7],unary_stream:[1,2],unary_stream_channel_rpc:7,unary_stream_rpc_method_handl:1,unary_unari:[1,2],unary_unary_channel_rpc:7,unary_unary_rpc_method_handl:1,unarysterammultical:2,unarystreamcal:2,unarystreamchannelrpc:7,unarystreamclientinterceptor:[1,2],unarystreammultical:[1,2],unarystreamserverrpc:7,unaryunarycal:2,unaryunarychannelrpc:7,unaryunaryclientinterceptor:[1,2],unaryunarymultical:[1,2],unaryunaryserverrpc:7,unauthent:1,unavail:1,under:[0,1,2,7],underli:[0,1,2],undeseri:[1,2],unexpect:2,unexpectedli:1,unimpl:[1,4],union:2,unit:1,unix:1,unknown:[1,4],unless:[1,2],unrecover:1,unseri:[1,2],unsubscrib:1,until:[0,1,2,7],untouch:2,upon:[1,2],url:1,usag:[0,1,2],usageerror:2,use:[1,2,5,7],used:[1,2,7],useful:1,user:[1,7],using:[2,7],usual:7,utf:[1,2],util:[1,2],v1alpha:5,valid:[0,1,2],valu:[0,1,2,4],valueerror:6,variabl:1,verifi:1,version:[2,8],via:1,visibl:1,wai:[1,2],wait:[1,2],wait_for:2,wait_for_connect:2,wait_for_readi:[0,1,2],wait_for_state_chang:2,wait_for_termin:[1,2],want:0,watch:4,were:2,what:[1,2,8],when:[0,1,2,4,7],whenev:4,where:[0,1,2],whether:[1,2,3],which:[1,2,3,5,7],whose:2,wire:1,wish:[1,2],with_cal:1,within:[1,2],without:1,work:[1,2],wrap:2,write:2,x00:0,x509_common_nam:[1,2],x509_subject_alternative_nam:[1,2],xDS:1,xds:1,xff:0,yet:1,yield:[1,2],you:[0,2,3],zero:1},titles:["Glossary","gRPC","gRPC AsyncIO API","gRPC Channelz","gRPC Health Checking","gRPC Reflection","gRPC Status","gRPC Testing","Welcome to gRPC Python\u2019s documentation!"],titleterms:{api:[2,8],asyncio:2,authent:1,author:1,block:2,callabl:[1,2],caveat:2,channel:[1,2],channelz:3,check:4,client:[1,2],code:[1,2],compress:1,connect:1,content:[1,2,3,4,5,6,7],context:[1,2],creat:[1,2],credenti:1,document:8,exampl:5,except:[1,2],futur:1,glossari:0,grpc:[1,2,3,4,5,6,7,8],handler:1,health:4,indic:8,interceptor:[1,2],interfac:[1,2],local:1,method:1,modul:[1,2,3,4,5,6,7],multi:[1,2],object:[1,2],overview:2,pars:1,protobuf:1,python:8,readi:1,refer:8,reflect:5,rpc:1,runtim:1,server:[1,2],servic:1,share:[1,2],side:[1,2],statu:[1,6],tabl:8,test:7,type:1,version:1,welcom:8,what:[3,5]}})