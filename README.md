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
docker build -t nodejs-calculadora:v1 .
```

## 4. Docker run
```
docker run --name con-nodejs-calculadora -p 4000:3000 nodejs-calculadora:v1
```

## 5. Enviar a Dockerhub
```
docker login –-u juliopari –-p *****
docker tag nodejs-calculadora:v1 juliopari/nodejs-calculadora:v1
docker push juliopari/nodejs-calculadora:v1
```

## 5. Desplegar en Digital Ocean
```
Ingresar a: /kubernetes/README.md
```
