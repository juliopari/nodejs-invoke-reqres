# digital-ocean

## 0. Descargar kubeconfig y ubicar en "C:\Users\USER\.kube" con nombre "config" sin extensión
```
C:\Users\USER\.kube\config
```

## 1. Listar namespace
```
kubectl get ns
```

## 2. Eliminar un namespace
```
kubectl delete ns <namespace>
```

## 3. Crear namespace node (ubicar en la carpeta /kubernetes/digital-ocean-deployment/)
```
kubectl apply -f 00-namespace.yaml
```

## 4. Ejecutar deployment
```
kubectl -n nodejs-examples apply -f 01-nodejs-deployment-loadbalancer.yaml
```

## 4.1 Listar deployments
```
kubectl -n nodejs-examples get deployments
```

## 4.2 Listar services
```
kubectl -n nodejs-examples get services
```


## 5. Conocer la IP Pública: EXTERNAL-IP
```
kubectl -n nodejs-examples get services
```

```
NAME                   TYPE           CLUSTER-IP       EXTERNAL-IP       PORT(S)        AGE  
nodejs-invoke-reqres   LoadBalancer   10.245.230.237   167.99.18.182     80:31310/TCP   2m42s
```

## 7. Invocar a la API
```
POST
http://167.99.18.182/api/v1/list-user
{
    "page": 2
}
```
