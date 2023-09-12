class PlacarDigital {
    constructor() {
      this.placarCasaGols = document.getElementById("placar-casa-gols");
      this.placarCasaFaltas = document.getElementById("placar-casa-faltas");
      this.placarVisitanteGols = document.getElementById("placar-visitante-gols");
      this.placarVisitanteFaltas = document.getElementById("placar-visitante-faltas");
    }
    init() {
      this.placarCasaGols.innerHTML = 0;
      this.placarCasaFaltas.innerHTML = 0;
      this.placarVisitanteGols.innerHTML = 0;
      this.placarVisitanteFaltas.innerHTML = 0;
    }
    atualizarPlacar(casaGols, casaFaltas, visitanteGols, visitanteFaltas) {
      this.placarCasaGols.innerHTML = casaGols;
      this.placarCasaFaltas.innerHTML = casaFaltas;
      this.placarVisitanteGols.innerHTML = visitanteGols;
      this.placarVisitanteFaltas;


    }