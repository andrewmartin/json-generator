# FILENAMES TO JSON GENERATOR

A simple (and hacky) tool to generate JSON using a HBS template.

#### In essence, this project:

1. Scans a directory
2. Grabs the filenames in that directory
3. Tosses the filenames into a defined handlebars template
4. Generates a JSON file based on this template

#### Usage:

1. Clone in a neighboring directory to your images:
![](http://cloud.believelabs.com/image/0p3i372e3L0d/Image%202015-09-10%20at%204.37.34%20PM.png)
2. `npm install`
3. Create a template, use our provided example.
4. Invoke the script with your options using `node index --dir=DIRNAME --template=TEMPLATENAME`
5. JSON will generate in the `./tmp` directory.

#### Options:

```sh
--template (required)
```
Provide the name of the template, and place in templates/ dir.

```sh
--dir (required)
```
Provide the name of the directory. *Optional if path is provided.*

```sh
--path (optional)
```
Provide the full path to the directory of images.


### Examples:

``` sh
node index --dir=01_ProductListing-StarWars --template=product-array-template
```

```sh
node index --path=~/Dropbox/Assets/02_SomeProject --template=price-template
```