function DnaTranscriber () {
  this.translate = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }
};

DnaTranscriber.prototype.toRna = function(rna) {
  var translation = '';
  for(i = 0; i < rna.length; i++){
    translation += this.translate[rna[i]]
  }
  return translation;
};

module.exports = DnaTranscriber;
