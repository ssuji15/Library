

Steps to deploy the frontend application

- **Build and push image**

```bash
  docker build -t #### .
```

```bash
  docker push #### 
```
Replace **####** with appropriate tag name

- **Deploy the application and services.**

```bash
  kubectl apply -f deployment.yaml
```

```bash
  kubectl apply -f service.yaml
```
