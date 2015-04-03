angular
	.module('ttt')
	.controller('TttController', TttController);

    TttController.$inject = ['$firebaseArray', '$firebaseObject', '$http'];


		function TttController($firebaseArray, $firebaseObject, $http) {
			var self = this;



			// All required variables and declarations are present here
			//var slotFull;
			self.allianceScore = 0;
			self.hordeScore = 0;
			// self.playerOne;
			// self.playerTwo;
			self.getWinner = getWinner;
			self.counter = 0;
			self.text;
			self.newTodo;
			self.chatter = chatter;
			self.chatLog = getChat();
			//self.slotFull = slotFull;
			//self.numSlot = numSlot;
			//var test = ('../assets/alliMain.png');
			self.makeMove = makeMove;
			var someoneWon = false;



			// Grid for 9 slots to play Tic Tac Toe
			self.slots = [
			{numSlot:'1',
			allianceSlot: false,
			hordeSlot: false},
			{numSlot:'2',
			allianceSlot: false,
			hordeSlot: false},
			{numSlot:'3',
			allianceSlot: false,
			hordeSlot: false},
			{numSlot:'4',
			allianceSlot: false,
			hordeSlot: false},
			{numSlot:'5',
			allianceSlot: false,
			hordeSlot: false},
			{numSlot:'6',
			allianceSlot: false,
			hordeSlot: false},
			{numSlot:'7',
			allianceSlot: false,
			hordeSlot: false},
			{numSlot:'8',
			allianceSlot: false,
			hordeSlot: false},
			{numSlot:'9',
			allianceSlot: false,
			hordeSlot: false},
			];




			function makeMove($index) {

				if (someoneWon === true) {
					console.log('Game Over')
				}

				else if (someoneWon === false) {

					if (self.slots[$index].allianceSlot === true || self.slots[$index].hordeSlot === true) {
						alert('Already made a move there buddy!');
						return;
					}

					else if (self.counter % 2 === 0) {
						self.slots[$index].allianceSlot = true;
					}

					else {
						self.slots[$index].hordeSlot = true;
					}
					self.counter +=1;
					self.getWinner($index);
				}


				} /*End of make Move Function*/
			//}; /*End of If / Else statement*/


			function getWinner($index) {


				/*Alliance Win Logic*/

				if (self.slots[0].allianceSlot === true && self.slots[1].allianceSlot === true && self.slots[2].allianceSlot === true)
					{
						console.log('Alliance Wins');
						someoneWon = true;
						self.allianceScore += 1;
					}

				else if (self.slots[3].allianceSlot === true && self.slots[4].allianceSlot === true && self.slots[5].allianceSlot === true)
					{
						console.log('Alliance Wins');
						someoneWon = true;
						self.allianceScore += 1;
					}

				else if (self.slots[6].allianceSlot === true && self.slots[7].allianceSlot === true && self.slots[8].allianceSlot === true)
						{
							console.log('Alliance Wins');
							someoneWon = true;
							self.allianceScore += 1;
						}
				else if (self.slots[0].allianceSlot === true && self.slots[3].allianceSlot === true && self.slots[6].allianceSlot === true)
					{
						console.log('Alliance Wins');
						someoneWon = true;
						self.allianceScore += 1;
					}
				else if (self.slots[1].allianceSlot === true && self.slots[4].allianceSlot === true && self.slots[7].allianceSlot === true)
					{
						console.log('Alliance Wins');
						someoneWon = true;
						self.allianceScore += 1;
					}
				else if (self.slots[2].allianceSlot === true && self.slots[5].allianceSlot === true && self.slots[8].allianceSlot === true)
					{
						console.log('Alliance Wins');
						someoneWon = true;
						self.allianceScore += 1;
					}
				else if (self.slots[0].allianceSlot === true && self.slots[4].allianceSlot === true && self.slots[8].allianceSlot === true)
					{
						console.log('Alliance Wins');
						someoneWon = true;
						self.allianceScore += 1;
					}
				else if (self.slots[2].allianceSlot === true && self.slots[4].allianceSlot === true && self.slots[6].allianceSlot === true)
					{
						console.log('Alliance Wins');
						someoneWon = true;
						self.allianceScore += 1;
					}


					/*Horde Win Logic*/

					else if (self.slots[0].hordeSlot === true && self.slots[1].hordeSlot === true && self.slots[2].hordeSlot === true)
						{
							console.log('Horde Wins');
							someoneWon = true;
							self.hordeScore += 1;
						}

					else if (self.slots[3].hordeSlot === true && self.slots[4].hordeSlot === true && self.slots[5].hordeSlot === true)
						{
							console.log('Horde Wins');
							someoneWon = true;
							self.hordeScore += 1;
						}

					else if (self.slots[6].hordeSlot === true && self.slots[7].hordeSlot === true && self.slots[8].hordeSlot === true)
							{
								console.log('Horde Wins');
								someoneWon = true;
								self.hordeScore += 1;
							}
					else if (self.slots[0].hordeSlot === true && self.slots[3].hordeSlot === true && self.slots[6].hordeSlot === true)
						{
							console.log('Horde Wins');
							someoneWon = true;
							self.hordeScore += 1;
						}
					else if (self.slots[1].hordeSlot === true && self.slots[4].hordeSlot === true && self.slots[7].hordeSlot === true)
						{
							console.log('Horde Wins');
							someoneWon = true;
							self.hordeScore += 1;
						}
					else if (self.slots[2].hordeSlot === true && self.slots[5].hordeSlot === true && self.slots[8].hordeSlot === true)
						{
							console.log('Horde Wins');
							someoneWon = true;
							self.hordeScore += 1;
						}
					else if (self.slots[0].hordeSlot === true && self.slots[4].hordeSlot === true && self.slots[8].hordeSlot === true)
						{
							console.log('Horde Wins');
							someoneWon = true;
							self.hordeScore += 1;
						}
					else if (self.slots[2].hordeSlot === true && self.slots[4].hordeSlot === true && self.slots[6].hordeSlot === true)
						{
							console.log('Horde Wins');
							someoneWon = true;
							self.hordeScore += 1;
						}



					//getWinner();
			} // End of Get Winner Function



			// This is the function to send the chat up to Firebase's Database
			function getChat() {
			  var ref = new Firebase('https://alliance-atac-horde.firebaseio.com/getChat')
			  var chatLog = $firebaseArray(ref);
			  return chatLog;
			}

			// This is the function to create a new chat and add it to the chatlog via the firebase database
			function chatter() {
				var newChat = {chat: self.text};
				self.chatLog.$add(newChat);
				self.text = null;

			}








		};   //End of Controller