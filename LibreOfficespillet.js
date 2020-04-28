function LibreOfficespillet() {
  ok = true
  while(ok == true) {
    kast = Math.floor(5*Math.random()) + 1

        if(kast == 1) {
          LibreOffice.src = 'Tekstdokument.png'
          beloeb = 5
        }
        else if(kast == 2) {
          LibreOffice.src = 'Regneark.png'
          beloeb = 3
        }
        else if(kast == 3) {
          LibreOffice.src = 'Præsentation.png'
          beloeb = 1
        }
        else if(kast == 4) {
          LibreOffice.src = 'Tegning.png'
          beloeb = -3
        }
        else if(kast == 5) {
          LibreOffice.src = 'Database.png'
          beloeb = -5
        }
    ok = confirm('Din gevinst er '+beloeb+' kr. Fortsæt?')
  }
}
