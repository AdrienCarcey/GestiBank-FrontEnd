# GestiBank-Divers

Commandes de Git (dans le terminal) :
	- git clone adresse_dépôt_github : récupérer le dépôt sur github sur votre PC (création d'un dépôt local)
	- git checkout -b dev origin/dev : récupérer la branche dev du dépôt sur github (s'il n'est pas récupéré avec "git clone")
	- git status : affiche le status de votre dépôt local
	- git add ficher : ajouter le fichier modifié en vue d'un commit
	- git add --all : ajouter tous les fichiers modifiés en vue d'un commit
	- git commit : initie un commit (après avoir fait les add)
	- git log : affiche l'historique des commits de votre dépôt local
	- git pull : màj de votre dépôt local à partir du dépôt sur github
	- git push : màj du dépôt sur github à partir de votre dépôt local


Lors d'un commit :
	- un editeur de texte s'ouvre
	- indiquer le nature du commit (nature de l'évolution)
	- échap (pour revenir sur la console)
	- :w => sauvegarder le commit
	- :q => quitter l'éditeur de texte (permet également d'annuler un commit)

Sublime Text :
	- Package : Git
	- Package : SublimeGit

Remarques :
	- Toujours travailler sur la branche "dev" du git
	- Avant de "push" sur github, penser à "pull" la derniere version du dépôt :
	=> en cas de conflits détectés par git, voir avec les autres membres du groupe pour les gérer
