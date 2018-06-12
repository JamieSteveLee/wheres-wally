var vm = new Vue({
	el: '#vm',
	data: {
		currentLevel: 0,
		levelData: [
			{
				class: 'lvl-01',
				unlocked: true,
				imgSrc: 'images/wheres-wally.jpg',
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
				unlocked: false,
				imgSrc: 'images/wheres-wally.jpg',
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
				unlocked: false,
				imgSrc: 'images/wheres-wally.jpg',
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
		}
	},
	methods: {
		find: function(name) {
			this.levelData[this.currentLevel].found[name] = true;

			var nextLvl = this.currentLevel + 1;
			if(name == 'wally' && nextLvl < this.levelData.length) {
				this.levelData[nextLvl].unlocked = true;
				console.log('Next level unlocked!');
			}

			switch(name) {
				case "wally":
					alert("Oooh look you gone and found Wally didn't ya");
					break;
				case "whitebeard":
					alert("Hey its Wizard Whitebeard look at him the wise old man with the big stick and the big white beard");
					break;
				case "odlaw":
					alert("Nah that's not Wally thats yellow Wally thats the bad Wally");
					break;
				case "wenda":
					alert("hehehe its girl Wally");
					break;
				case "woof":
					alert("Woof woof woof you found the dog, but its only his tail but you got him well done");
					break;
				case "tubman":
					alert("He's like the cat what got the cream");
					break;
				default:
					alert(name + " found");
					break;
			}

		}
	},
	beforeMount() {}
});