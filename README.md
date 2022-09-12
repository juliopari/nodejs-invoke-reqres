# nodejs-express-calculadora-routes-services

## 1. Instalar dependencias
```
npm install
```

## 2. Ejecutar
```
npm run dev
```

## 3. Docker build
```
docker build -t nodejs-invoke-reqres:v1 .
```

## 4. Docker run
```
docker run --name con-nodejs-invoke-reqres -p 4000:3000 nodejs-invoke-reqres:v1
```

## 5. Enviar a Dockerhub
```
docker login –-u juliopari –-p *****
docker tag nodejs-invoke-reqres:v1 juliopari/nodejs-invoke-reqres:v1
docker push juliopari/nodejs-invoke-reqres:v1
```

## 5. Desplegar en Digital Ocean
```
Ingresar a: /kubernetes/README.md
```
