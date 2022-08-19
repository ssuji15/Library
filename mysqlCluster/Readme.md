

## Mysql Cluster

- **Deploy Operator**

```bash
  kubectl apply -f https://raw.githubusercontent.com/mysql/mysql-operator/trunk/deploy/deploy-crds.yaml
  kubectl apply -f https://raw.githubusercontent.com/mysql/mysql-operator/trunk/deploy/deploy-operator.yaml
```

Confirm if the operator is up and running. 

- **Create Secret for DB Configuration**
```bash
  kubectl create secret generic mysql --from-literal=rootUser=### --from-literal=rootHost=% --from-literal=rootPassword=#### 
```

- **Deploy Mysql Cluster**
```bash
  kubectl apply -f mysql.yaml
```

- **Deploy helper pods**
```bash
  kubectl apply -f dump.yaml
```

- **Copy dump to the PVC**
```bash
  kubectl cp shellDump/ dummy:dump
```

- **Use mysqlsh to load the dump**
```bash
  kubectl exec -it mysqlsh -- sh
  #mysqlsh
  #\connect root@mycluser
  #util.loadDump('/dump/shellDump')
```

- **Scale the cluster**
```bash
  kubectl apply -f mysql2.yaml
```

Scaling the cluster will automatically copy the dump to the new instances.

- **Delete the helper pods**
```bash
  kubectl delete -f dump.yaml
```
