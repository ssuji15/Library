

## Deploy the application
1) Start minikube
```bash
  minikube start --cni calico
```
2) Enable addons required for the application.
```bash
  minikube addons enable ingress
  minikube addons enable metrics-server
```
3) [Deploy Private Registry](https://github.com/ssuji15/Library/tree/master/private-registry)
4) [Deploy Mysql Cluster](https://github.com/ssuji15/Library/tree/master/mysqlCluster)
5) [Deploy backend](https://github.com/ssuji15/Library/tree/master/backend)
6) [Deploy frontend](https://github.com/ssuji15/Library/tree/master/frontend)
7) Create ingress
```bash
  kubectl apply -f ingress.yaml
```
8) [Deploy and configure Jenknis](https://github.com/ssuji15/Library/tree/master/jenkins)
