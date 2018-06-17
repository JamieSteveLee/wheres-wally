var vm = new Vue({
	el: '#vm',
	data: {
		currentLevel: 0,
		showMenu: false,
		showModal: false,
		showFoundMsg: false,
		latestFound: 'Wally',
		levelData: [
			{
				class: 'lvl-01',
				name: 'Level 1',
				unlocked: true,
				imgSrc: 'images/lvl-01.jpg',
				found: {
					wally: false,
					woof: false,
					wenda: false,
					whitebeard: false,
					odlaw: false
				}
			},
			{
				class: 'lvl-02',
				name: 'Level 2',
				unlocked: true,
				imgSrc: 'images/lvl-02.jpg',
				found: {
					wally: false,
					woof: false,
					wenda: false,
					whitebeard: false,
					odlaw: false
				}
			},
			{
				class: 'lvl-03',
				name: 'Level 3',
				unlocked: true,
				imgSrc: 'images/lvl-03.jpg',
				found: {
					wally: false,
					woof: false,
					wenda: false,
					whitebeard: false,
					odlaw: false
				}
			},
			{
				class: 'lvl-04',
				name: 'Level 4',
				unlocked: true,
				imgSrc: 'images/lvl-04.jpg',
				found: {
					wally: false,
					woof: false,
					wenda: false,
					whitebeard: false,
					odlaw: false
				}
			},
			{
				class: 'lvl-05',
				name: 'Level 5',
				unlocked: true,
				imgSrc: 'images/lvl-05.jpg',
				found: {
					wally: false,
					woof: false,
					wenda: false,
					whitebeard: false,
					odlaw: false
				}
			}
		]
	},
	computed: {
		currentData: function() {
			return this.levelData[this.currentLevel];
		},
		lastLevel: function() {
			if(this.currentLevel == this.levelData.length - 1) {
				return true;
			} else {
				return false;
			}
		},
		nxtLvl: function() {
			return this.currentLevel + 1;
		}
	},
	methods: {
		find: function(name) {
			if(name == 'wally' && !this.levelData[this.currentLevel].found[name]) {
				this.displayModal(true);
				if(!this.lastLevel) {
					this.levelData[this.nxtLvl].unlocked = true;
				}
			} else {
				this.displayFoundMsg(name);
			}
			this.levelData[this.currentLevel].found[name] = true;
			// switch(name) {
			// 	case "wally":
			// 		alert("Oooh look you gone and found Wally didn't ya");
			// 		break;
			// 	case "whitebeard":
			// 		alert("Hey its Wizard Whitebeard look at him the wise old man with the big stick and the big white beard");
			// 		break;
			// 	case "odlaw":
			// 		alert("Nah that's not Wally thats yellow Wally thats the bad Wally");
			// 		break;
			// 	case "wenda":
			// 		alert("hehehe its girl Wally");
			// 		break;
			// 	case "woof":
			// 		alert("Woof woof woof you found the dog, but its only his tail but you got him well done");
			// 		break;
			// 	case "extra":
			// 		alert("He's like the cat what got the cream");
			// 		break;
			// 	default:
			// 		alert(name + " found");
			// 		break;
			// }
		},
		displayMenu: function(menuOpen) {
			this.showMenu = menuOpen;
		},
		displayModal: function(modalOpen) {
			this.showModal = modalOpen;
		},
		displayFoundMsg: function(charName) {
			this.latestFound = charName;
			this.showFoundMsg = true;
			setTimeout(function() {
				vm.showFoundMsg = false;
			}, 2000);
		},
		selectLevel: function(thisLevel) {
			if(this.levelData[thisLevel].unlocked) {
				this.currentLevel = thisLevel;
				this.displayMenu(false);
				this.displayModal(false);
			}
		},
		goToNextLvl: function() {
			this.selectLevel(this.nxtLvl);
		}
	},
	beforeMount() {}
});