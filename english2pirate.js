var $ = function(id) {
	return document.getElementById(id);
}

//Vocab list [english, pirate]
var english2pirate =	[
							["after", "aft"], 
							["am", "be"], 
							["are", "be"],
							["attractive", "comely"], 
							
							["best pirate ever", "peter griffin"],
							["can", "canna'"],
							
							["cheat", "hornswaggle"],
							["child", "sprog"], 
							["children", "sprogs"],
							
							["die", "visit Davey Jones' Locker"],
							["died", "found their watery grave"], 
							["drink", "barrel o' rum"],
							
							["excuse me", "arrr"],
							
							["fair", "square"],
							["find", "come across"],
							["food", "grub"],
							["forward", "fore"], 
							["friend", "me bucko"], 
							
							["happy", "grog-filled"],
							["hello", "ahoy"], 
							["hi", "yo-ho-ho"],
							["hotel", "fleabag inn"],
							["how far", "how many leagues"],
							
							["is", "be"], 
							
							["jerk", "blaggart"],
							["johnny depp", "Capn' Jack Sparrow"],
							
							["kill", "keel-haul"],
							["killed", "keel-hauled"], 
							["know", "be knowin'"],
							
							["lean", "careen"], 
							["leave", "weigh anchor"], 
							["longevity", "the fountain of youth"],
							 
							["madam", "proud beauty"], 
							["magistrate", "bosun"], 
							["mall", "market"],
							["map", "chart"],
							["miss", "comely wench"],
							["money", "doubloons"], 
							["mother", "mum"],
							["my", "me"],
							
							["nearby", "broadside"],
							["nonsense", "bilge"], 
							["nose", "prow"],
							
							["ocean", "briny deep"],
							["of", "o'"],
							["officer", "foul blaggart"], 
							["old", "barnacle-covered"],
							
							["pardon me", "avast"], 
							["pirate", "buccaneer"],
							["pub", "Skull & Scuppers"],
							
							["restroom", "head"],
							["restaurant", "galley"],
							
							["sailor", "swab"],
							["sailors", "hands"],
							["sir", "matey"],
							["stranger", "scurvy dog"],
							["sleep", "take a caulk"],
							["song", "shanty"], 
							["stop", "belay"],
							["storm", "squall"],
							["stupid", "daft"], 
							
							["tell", "be tellin'"], 
							["the", "th'"],
							
							["quickly", "smartly"],
							
							["where", "whar"], 
							
							["yeah", "arrr"],
							["yes", "aye"],
							["you", "ye"],
							["your", "yer"], 
						];

function Capitalize(e2pString) {
	
	return e2pString.charAt(0).toUpperCase() + e2pString.substring(1);
}
//Replaces English words with Pirate words -- words not in array are ignored and stay as English       
function Translate(text) {

	for (var i = 0; i < english2pirate.length; i++) 
	{
		var toReplace = new RegExp("\\b"+english2pirate[i][0]+"\\b", "i");
		var index = text.search(toReplace);
		
		//If the english word is capitalized -- replace pirate word in array with captialized pirate word
		while (index != -1)
		{	

			if (text.charAt(index) >= "A" && text.charAt(index) <= "Z")
			{			
				text = text.replace(toReplace, Capitalize(english2pirate[i][1]));
			}
			else
			{
				text = text.replace(toReplace, english2pirate[i][1]);//replace with the string in the second index spot of the array that it matched
			}
			index = text.search(toReplace);
		}
	}
	//Pirates with tourets start each new sentence with Arrr!
	//text = text.replace(/(\b\w+\b\.)/, "$1  Arrrr!")
		text = text.replace(/(\b\w+\b[.!?])/, "$1 WHERE HAS ALL TH' RUM GONE!?");
		text = text.replace(/(\w+eter \w+riffin)/, "$1, Aye, Matey!  Best bloody buccaneer that sailed th' seven seas!"); 
	//text = text.replace(/(\b\w+\?\b)/, "$1  Ye serious?  Why don't yee shove off me bloody poop deck an' go arsk Capn' Morgan?!  Ye best not return without rum or ye'll walk the plank!");
		return text;
}
//Calls translate using the english textarea, and displays pirate speak in the translation textarea
function displayTranslation()
{
	$("Pirate").value = Translate($("English").value);
}
//Clears English textarea
function clearInput() 
{
	var clearThisBox = "";
	$("English").value = clearThisBox;
}
//Clears translation textarea
function clearOutput()
{
	var clearThisBoxToo = "";
	$("Pirate").value = clearThisBoxToo;
}
//Calls displayTranslation on translate click
window.onload = function ()
{
	$("clearInput").onclick = clearInput;
	$("clearOutput").onclick = clearOutput;
	$("translateButton").onclick = displayTranslation;
}