import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-singlestate',
  imports: [],
  templateUrl: './singlestate.component.html',
  styleUrl: './singlestate.component.scss',
})
export class SinglestateComponent {


  constructor(private activated:ActivatedRoute,private api:ApiService)
  {}
    districts = [
    {
      id: 1,
      name: "Hisham Ahamed T.P",
      image: "https://media-hosting.imagekit.io//390d22e8cd244991/WhatsApp%20Image%202025-02-14%20at%2023.25.31_c7ddc960.jpg?Expires=1834164309&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Z0Ql7lraXFbJaqkiv~tqRF3WT~B2zuPy8z5pFalEsHJ1AiiOqm66wb9G1mdgzU4q-yW1kj0KqSOe8SJa3-8yOlW9LncsZmUIjPGhvdjPMIoc618AKo6i31RflWB~34HPmBmRE0HZnR91lX~~ZEeQ4hVNib2Cdz6KSciUKZpvNvE3uN61IzQsi1EkWPw5RVgE1NaJNJazku9fJI8U68mqiAdhp3ohZNcAefSFJTKzd1teGWSiRekhQBiYMdUaYVDrunwJz~Gk0bvTKac0Ze32f~miQwgQdMxUBidk5lZ1dlMVY79zerFeQKymLAh3BOhSJ2cQvW9cGDy1CsnOymAsNg__",
      description: "Captain"
    },
    {
      id: 2,
      name: "Josna John",
      image: "https://media-hosting.imagekit.io//e8f2be86dcc04b58/WhatsApp%20Image%202025-02-14%20at%2023.36.05_b2b4efa7.jpg?Expires=1834168064&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OfEe1Op4UJpJIImK8GHyK517tGq1WAwWz0RXkU3Hf7bWbp5M1zzOOukT3Ax5fBXOn0WDtg4jUKIEu2Dw6CHXX6q-QWe4LU3BM~tvrIKYdPInofM6ItxXyZ21nBRGbgY01a1oMh88aCM92c~xXjQkdbMba1~nCDP~FMgcpowuVI2u05lID0hZvwtx96LkeZe5sZeCQW2IQhc2x27zQpBuwp0wI9zgnfR4WTANFGg4s9WvaHFbIldTARIzVYrVdA17ZWBXbu1s32X3Shm~ZWBt3HB9ldK552jx30yKydkeBZFrpmRF7oUXMHiXAFQMGeVmQEVOd5-rfsPBtLaBkfs2iw__"
    },
    {
      id: 3,
      name: "Gopika E",
      image:  "https://media-hosting.imagekit.io//235be5f79dc44435/WhatsApp%20Image%202025-02-14%20at%2023.40.39_1c561ac2.jpg?Expires=1834164813&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=E2CfvuGJPfhUAGEm~jhOeXIxfo8Zk~DyRx96YOexaTGdphSAP1X3ZagQfYav9jifDpYj4N6wpV7giUB5kgCrb6U30sduWKKf77~gX4iFwnaRCtKCZmdCba3hnnMSymFBSUBKoB~5hGKgpWZuDv~FH5wQzsOWQdbejHlkf2uAiT6xYH0bNNUQj8PDwuc368~Ebky7aTTo1f12soBbJeXtdnDICNu9xRQErj~3Jv6hoDeu6Afawy4WrwYuXJWq9fEQkGUsp3eLZcJpuSr7h5gqRFbzZn8SE-PmQhGCwGxEg-9Ueq8s5RYm-5A42022~DVVAjVVcNIlim39wF~vk3yTxQ__",

      description: "Team Member"
    },
    {
      id: 4,
      name: "Jazal K .J",
      "image": "",

      description: "Team Member"
    },
    {
      id: 5,
      name: "Merin P Wilson",
      image:  "https://media-hosting.imagekit.io//db7609c07229446f/WhatsApp%20Image%202025-02-14%20at%2023.36.05_21267616.jpg?Expires=1834164441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=H1IiuiL7loFUosa8~RDtSQ0vdgZUmWzrCBGN7d3G97-r7PWSvcl~7NVlY-eUy3Bhl~XwK-gzTx1fKy57PIDqbg6bAC3bfviV9XaPXPKXR9Hgxv-Us4~vwMNLxhIT2KyhnuJiOykTEXORqkMgSwuBRMvN6WY7STTBzkOBM5ZEyZ~6sHLc8454boS7k6LeEXE9Q7lzLCwrubJaw0LWwayPNTo03wdtyoUiNDnBYuTQ-wUBeH19LI4Ox-IeP6NbKRIpu6-aqp5Z8Wn7ULtPctfHL4Pp9g4pOFlbJITYcy1DuojjKMB6a9IIlPYcRHGVxsltaghG3pkIZ5k0lbljzgwQNQ__",

      description: "Team Member"
    },
    {
      id: 6,
      name: "Muhammed Shinas",
      "image": "https://media-hosting.imagekit.io//6637cb5fd52144bb/WhatsApp%20Image%202025-02-14%20at%2023.48.03_0d02bd66.jpg?Expires=1834165485&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UvLO~2cfCHroVqUXTHeBdwi8NEdtX3TM0a3imQPxLX6gz9yD2p4iMBrSBQtoMDYloKL2SsDM-l-eYAOayWkxCZ2AnYofQY1vEeHIbZj~9zL1x7bR6Lf34NVVfEaUXLsWBJ2QxHxg1qxFIoH3Nb7NW5VHXfIWGQHzWExJtRFZ-JUJoReK7n8LWxOzQcu-ZH~XrmVjjMlucUhc3QHcvvy7wQtICyLaTwaIT~JEUa2wdyDnhinMI~wXoxID2XOOdeE4t3EU4K-PiZmOV93BSg4R3gAPt2kVKzsFA2LHN01DKH8X7Rhoxn~miaSYuhZ50Rhp-UvR1f4CET3wAQa6AF2TMA__",

      description: "Team Member"
    },
    {
      id: 7,
      name: "Gopika Ajeesh",
      image: "https://media-hosting.imagekit.io//760d2d218db34cf1/WhatsApp%20Image%202025-02-14%20at%2023.36.02_e26f80ab.jpg?Expires=1834164441&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jjI0yIzhPcWdN0q1HP7UoZNqoUqbnRa0vFmqlZzlUjOkSidB48r8MBbHEHugChjZB6KIUM3cyR6Qhzp1Pgim0SHUN-27lu4sDR1CNCyf2TllVUvVrY6Qj7TOevEqFxMK7MBp4I~kvK-voDm87~F1~YSHZ1M2OJXY1EkZiUNaQfJshl~266ycfx21Br~0efnA83JTieg-84VtrTL04s7RW74mPIVX8suDiC00IkJerQtYVb5HsSykV3lSqaDd3Qr2HQAXWLF45gAHzC~USoSy3uvnIvalNuG54Ks4tT5NW3h7XFWM-fB0tYdDA992RX7eZbuU~1RRbhQg-bRetZixVw__",
      description: "Team Member"
    },
   
    
   
    
    
    {
      id: 18,
      name: "Johan Binu",
      image: "https://media-hosting.imagekit.io//5bc9a5ffc5b0432d/WhatsApp%20Image%202025-02-15%20at%2000.12.03_fcabd3bb.jpg?Expires=1834166566&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zQvZuLJkrwHZK-2bxZ~k7W5f8deH8fjZIGd~dBiFwX~SV0QJX~1w54WUImRiqxDnlu-RLnQ~qWW5CYfMHxpwn3ySbWcNyRQ~xOlhv8JojLJRkzSbCcyK2KcihlvgX7jLBvqsNn5SlTspNwj6nvBOdDZDq5hpsc~y4MEEV-a5GaLvOzLumm1kwKR0eIe9nBY65tqtpyATfgRwociQBd6k8Hakl1SegvIoG1iPmp2SgJuVWxt14f8~5IAuXxco1No8J1bDCnMpr-dnl0FuwnReN8-jjCFet32H8sfHBPVfaOPu7pLURKQhUdXbQLgUxXA6drC3BUlMPdrrKYQq~SRhOg__",

      description: "Team Member"
    },
    
    {
      id: 21,
      name: "George Sebastin",
      image: "https://media-hosting.imagekit.io//a7464d0e6b1e41c9/IMG-20240727-WA0015(1).jpg?Expires=1834165428&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BPF706MpF9Sc5~Sb8sXvjbkhEzKq6Z-kq0kYSapZvcE4IFngJa5PZX~p2EnkcQE55MRe22QO1VW-c3xh6elJJ-IhPOV-XjkE-ir03hrN~SFFBMtQ5bcYR4hygdM-gUwMx28a100dH34OOugcHF3a0cmawFAK3fYv8HO8tG~l4hAOhcQaO-vRE2DWMK6EDwqo4iD9I~yWUqcY0puhC~lNdnGFOCj4Ym0bKqbZpa57Y8klF0YZZQLicCJtRNJbuNtn7OVZnF62kxAHyht7My5~ILib0~hLh5lkSotLggzuNsUtPiGGYDQdW6xfewHEo1cJlSskvRg95Wk8PMiAYVwZyg__",

      description: "Team Member"
    }
    
  ]
  
   
data:any;
 ngOnInit(){
  let id=this.activated.snapshot.paramMap.get('id');
  this.data=this.api.getDistrictById(id);



 }
}