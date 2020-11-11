# What
* xxx-loader is more like plug-in
* need to install `css-loader` and `style-loader`
* css code will be in js code after building 

# How to run
* run locally
```
npm install
open index.html
```

* run by docker
```
docker build -t cssloader .
docker run -it --rm -p80:80 cssloader 
```

