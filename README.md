

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
3) [Deploy Private Registry](https://github.wdf.sap.corp/I570692/BTPRPC-132/tree/main/private-registry)
4) [Deploy Mysql Cluster](https://github.wdf.sap.corp/I570692/BTPRPC-132/tree/main/mysqlCluster)
5) [Deploy backend](https://github.wdf.sap.corp/I570692/BTPRPC-132/tree/main/backend)
6) [Deploy frontend](https://github.wdf.sap.corp/I570692/BTPRPC-132/tree/main/frontend)
7) Create ingress
```bash
  kubectl apply -f ingress.yaml
```
8) [Deploy and configure Jenknis](https://github.wdf.sap.corp/I570692/BTPRPC-132/tree/main/jenkins)
