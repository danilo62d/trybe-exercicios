const state = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

const selectButton = document.getElementById('state');

selectButton.addEventListener('click', () => {
  // não funcionaou com 'select' no lugar do 'click';
  for (let i = 0; i < state.length; i += 1) {
    const states = document.createElement('option');
    states.className = 'states';
    states.id = state[i];
    states.innerText = state[i];
    selectButton.appendChild(states);
  }
});
