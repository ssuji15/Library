

## Private Registry

- **Create volume (PVC) for registry**

```bash
  kubectl apply -f registryStorage.yaml
```

- **Deploy Registry**
```bash
  kubectl apply -f registry.yaml
```

- **Check if the registry is deployed.** 

```bash
  curl http://registry-url:registryPort/v2/_catalog
```

### Configuring insecure registry

1. SSH into minikube

```bash
minikube ssh
```
2. Create daemon file
```bash
sudo echo '{
"insecure-registries": ["registry:30001"] 
}' > /etc/docker/daemon.json 
```

3. Restart docker
```bash
sudo systemctl restart docker
```

