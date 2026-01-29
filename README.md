This is a simple project which demonstrates how kubernetees work . For the local working purpose I have used minikube which performs same purpose as a kubernetees . 
Here I have create three independent pods : 
1- login-clinet : This acts as frontend UI . It has 3 replicas which helps in load balancing when there are too many requests . The request first comes to nginx proxy which is further forwarded inside the pods .
2- login-k8 : This acts as backend server . Even this has 3 replicas to help as load balancer . I have used nginx ingress controller to send the request from outside world to the server running inside pod . 
3- mongo : This is used for database . Here only 1 instance is used to avoid ambiguity . All the servers are connected to this database 
