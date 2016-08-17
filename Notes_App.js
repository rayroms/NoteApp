class NotesApplication(){
	constructor(author){
		this.author = author;
		this.notes = [];
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
	
	delete(note_id){
		delete this.notes[notes_id];
	}
	
	get(note_id){
		var str = this.notes[note_id]
		return str.toString;
	}
	
	search(search_text){
		
	}
	
	edit(note_id, new_content){
		var g = this.notes[note_id] = new_content;
		return g;
	}
	
}