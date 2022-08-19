

Steps to deploy the backend application

- **Build and push image**

```bash
  cd app/
```

```bash
  docker build -t #### .
```

```bash
  docker push #### 
```
Replace **####** with appropriate tag name

```bash
  cd ../
```

- **create config map and secrets required for the application.**

```bash
  kubectl create secret generic dbsecret --from-literal=db_user=### --from-literal=db_password=###
```

```bash
  kubectl create configmap backend-config --from-literal=db_host=#### --from-literal=db_port=#### --from-literal=db_name=####
```
- **Deploy the application**

```bash
  kubectl apply -f deployment.yaml
```
