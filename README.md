### How to setup Amygdalar (BLA) Map application

#### Run build and copy the files over to developent server from your localhost

```
cp /Users/seita/Documents/git/amygdalar/bla-carousel3d
npm run build
scp -r /Users/seita/Documents/git/amygdalar/bla-carousel3d/dist/ syamashi@mcpweb-dev.loni.usc.edu:/home/syamashi/amygdalar/
```

#### Configure Apache server

##### Aliasing the file links and copy the contents

```
sudo mkdir -r /var/www/mcp/
sudo ln -s /ifs/web/mcp/www/docs/files /var/www/mcp/

sudo cp /home/syamashi/amygdalar/dist/index.html /var/www/amygdalar/
sudo cp -R /home/syamashi/amygdalar/dist/static /var/www/amygdalar/
```


#### Configure httpd.conf for basic authentication

```
        AuthType basic
        AuthName "private"
        AuthUserFile /srv/httpd/.htpasswd
        Require valid-user        
```        

#### Set the id/pass in .httpdpasswd

```
sudo mkdir -p /srv/httpd

echo "amygdalar:$apr1$O/0C6IQe$yj8rjSMOAq9PIghvlehVx." >> /srv/httpd/.httpdpasswd
```


### Setting up Production

#### image6.mcp.loni.usc.edu

```
sudo ln -s /ifs/web/mcp/www/docs/files /var/www/mcp/
sudo mkdir /var/www/amygdalar
sudo chown 777 /var/www/amygdalar

scp /Users/seita/Documents/git/amygdalar/bla-carousel3d/dist/index.html syamashi@image6.mcp.loni.usc.edu:/var/www/amygdalar/
scp -r /Users/seita/Documents/git/amygdalar/bla-carousel3d/dist/static syamashi@image6.mcp.loni.usc.edu:/var/www/amygdalar/
```


#### /etc/apache2/sites-enabled/000-default

```
    Alias /amygdalar "/var/www/amygdalar"
    <Directory "/var/www/amygdalar">
        Options Indexes MultiViews FollowSymLinks
        AllowOverride None
        AuthType basic
        AuthName "private"
        AuthUserFile /srv/httpd/.htpasswd
        Require valid-user
        Order allow,deny
        Allow from all
    </Directory>
    
```

#### .httpdpasswd

```
sudo mkdir -p /srv/httpd

echo "amygdalar:$apr1$O/0C6IQe$yj8rjSMOAq9PIghvlehVx." >> /srv/httpd/.httpdpasswd

```

.httpdpasswd on prod

```
id: review
pass: bla0721
```


