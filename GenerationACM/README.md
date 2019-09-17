Comment modifier la génération d'acm

Ouvrir un ide prenant en compte java, et ouvrir le fichier ThingML-master\compilers\thingmltools\src\main\java\org\thingml\ACM\ACMGenerator.java
Faites les modifications
Exécutez le main ThingML-master\compilers\registry\src\main\java\org\thingml\compilers\commandline\main.java
Récupérez votre .class ThingML-master\compilers\thingmltools\target\classes\org\thingml\ACM\ACMGenerator.class
Mettez le dans un dossier avec ce chemin org\thingml\ACM
Ouvrez votre cmd et entrez cette commande qui permet de mettre a jour le fichier .class du fichier .jar permettant la compilation de thingml:

	jar uf ThingML2CLI.jar org\thingml\ACM\ACMGenerator.class

Ensuite pour executer le code modifié il faut taper cette commande dans votre cmd en indiquant le .jar (qui vient d'etre modifier) et le chemin vers le fichier de configuration thingml
	
	java -jar thingml2CLI.jar -t acm -o ./new -s TestAnnotation.thingml

Pour tout ajout de générateur veuillez l'ajouter dans ThingML-master\compilers\registry\src\main\java\org\thingml\compilers\registry\ThingMLCompilerRegistry.java dans le if de la ligne 62