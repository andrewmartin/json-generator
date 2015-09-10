# FILENAMES TO JSON GENERATOR

A simple (and hacky) tool to generate JSON using a HBS template.

Right now, it essentially scans a directory, grabs the names of all those files, and tosses them into a defined template.

Usage:

1. Clone in a neighboring directory to your images:
![](http://cloud.believelabs.com/image/0p3i372e3L0d/Image%202015-09-10%20at%204.37.34%20PM.png)
2. Create a template, use our provided example.
3. Invoke the script with your options using `node index --dir=DIRNAME --template=TEMPLATENAME`
4. JSON will generate in the `./tmp` directory.

### Examples:

``` sh
node index --dir=01_ProductListing-StarWars --template=product-array-template
```