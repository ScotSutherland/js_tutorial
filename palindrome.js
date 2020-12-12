
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
	return !!this.match(/^\s*$/g) || this === "";
}

Array.prototype.last = function() {
	return this.slice(-1);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// TranslatedPhrase object
function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;
	this.processedContent = function processedContent() {
		return processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();


