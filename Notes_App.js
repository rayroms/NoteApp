class Notes(){
	constructor(author){
		this.author = author;
		this.notes = [];
	}
	
}



class NotesApplication(newNote){
	
	constructor(newNote){
		this.author = newNote.author;
		this.notes = newNote.notes;
	}
	
	
	create(note_content){
		this.notes.push(note_content);
	}
	
	listNotes(){
		var arr = this.notes; //get notes array 
		var outputArr = {};
		for(var c = 0; c < arr.length; c++){
			var label = "Notes ID: " + "[" + c "]" + "\n" 
						+ arr[c] + "\n\n" + "By Author " + this.author;
			console.log(label);
		}
	}
	
	
	delete_(note_id){
		delete this.notes[notes_id];
	}
	
	get_(note_id){
		var str = this.notes[note_id]
		return str.toString;
	}
	
	
	search(search_text){
		
		var arr = this.notes; //get notes array 
		var LabelToRet = 'Showing results for search' +"\'"+"[ " + search_text + " ]"+ "\'" +"\n\n\n"; 
		for(var c = 0; c < arr.length; c++){
			var locationInStr = arr[c].indexOf(search_text);
			if(locationInStr !== -1){
				
				var label = "Notes ID: " + "[" + c "]" + "\n" 
						+ arr[c] + "\n\n" + "By Author " + this.author + "\n";
				LabelToRet.concat(label);
			}
		}
	
		return LabelToRet;
	}
		
		
	
	edit(note_id, new_content){
		var g = this.notes[note_id] = new_content;
		return g;
	}
	
}