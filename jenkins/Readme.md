

## Jenkins

- **Create volume (PVC) for jenkins**

```bash
  kubectl apply -f storage.yaml
```

- **Create a service account**

```bash
  kubectl apply -f service-account.yaml
```

- **Create cluster role**

```bash
  kubectl apply -f cluster-role.yaml
```

- **Deploy Jenkins**

```bash
  kubectl apply -f deployment.yaml
```

- **Create service to access jenkins**

```bash
  kubectl apply -f service.yaml
```

### Configure Jenkins

1. Install the following plugins
  - Kubernetes
  - Kubernetes-CLI
2. Configure Kubernetes
  - Manage Jenkins -> Manage Nodes and Clouds -> Configure Clouds
  - Choose Kubernetes from the drop down, and choose Kubernetes Cloud details
  - Scroll down and fill Jenkins URL -> the service URL
  - Scroll down and fill Jenkins tunnel -> the tunnel URL exposed on port 50000
  - Click save

### Create Pipeline
1. New Item -> Choose Pipeline -> Click Ok
2. Under Build Trigger -> choose *GitHub hook trigger for GITScm polling*
3. Under Pipeline -> Choose *Pipeline script from SCM*
4. Under SCM -> choose GIT
5. under Script Path -> Specify the jenkins file path in the github repo. 
6. Click save.
  
### Configure Github repo
1. Navigate to the repo -> Settings -> Webhooks -> Add webhooks
2. Specify the http://Jenkins-URL/github-webhook/ (The github webhooks will work only for public domain and will not trigger hook for localhost. In case if you are using localhost, kindly configure tool such as ngrok.).
3. Click save and verify green tick in Recent Deliveries tab.
