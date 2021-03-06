$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/avaliacao.feature");
formatter.feature({
  "line": 1,
  "name": "Avaliacao escolar",
  "description": "",
  "id": "avaliacao-escolar",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "testar valores invalidos",
  "description": "",
  "id": "avaliacao-escolar;testar-valores-invalidos",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "que quero testar valores invalidos",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "eu informar os valores invalidos \u003cnota1\u003e e \u003cnota2\u003e e \u003cfaltas\u003e e \u003ccargaHoraria\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema reporta uma excecao do tipo DadosInvalidosException",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "avaliacao-escolar;testar-valores-invalidos;",
  "rows": [
    {
      "cells": [
        "nota1",
        "nota2",
        "faltas",
        "cargaHoraria"
      ],
      "line": 10,
      "id": "avaliacao-escolar;testar-valores-invalidos;;1"
    },
    {
      "cells": [
        "-1.0",
        "0.0",
        "17",
        "64"
      ],
      "line": 11,
      "id": "avaliacao-escolar;testar-valores-invalidos;;2"
    },
    {
      "cells": [
        "0.0",
        "-1.0",
        "17",
        "64"
      ],
      "line": 12,
      "id": "avaliacao-escolar;testar-valores-invalidos;;3"
    },
    {
      "cells": [
        "0.0",
        "0.0",
        "-1",
        "64"
      ],
      "line": 13,
      "id": "avaliacao-escolar;testar-valores-invalidos;;4"
    },
    {
      "cells": [
        "0.0",
        "0.0",
        "16",
        "-64"
      ],
      "line": 14,
      "id": "avaliacao-escolar;testar-valores-invalidos;;5"
    },
    {
      "cells": [
        "11.0",
        "10.0",
        "16",
        "64"
      ],
      "line": 15,
      "id": "avaliacao-escolar;testar-valores-invalidos;;6"
    },
    {
      "cells": [
        "10.0",
        "11.0",
        "16",
        "64"
      ],
      "line": 16,
      "id": "avaliacao-escolar;testar-valores-invalidos;;7"
    },
    {
      "cells": [
        "10.0",
        "10.0",
        "65",
        "64"
      ],
      "line": 17,
      "id": "avaliacao-escolar;testar-valores-invalidos;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "testar valores invalidos",
  "description": "",
  "id": "avaliacao-escolar;testar-valores-invalidos;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "que quero testar valores invalidos",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "eu informar os valores invalidos -1.0 e 0.0 e 17 e 64",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema reporta uma excecao do tipo DadosInvalidosException",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaValoresInvalidos()"
});
formatter.result({
  "duration": 329190230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1.0",
      "offset": 33
    },
    {
      "val": "0.0",
      "offset": 40
    },
    {
      "val": "17",
      "offset": 46
    },
    {
      "val": "64",
      "offset": 51
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresInvalidos(double,double,int,int)"
});
formatter.result({
  "duration": 5143064,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliandoResultado()"
});
formatter.result({
  "duration": 4506239,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "testar valores invalidos",
  "description": "",
  "id": "avaliacao-escolar;testar-valores-invalidos;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "que quero testar valores invalidos",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "eu informar os valores invalidos 0.0 e -1.0 e 17 e 64",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema reporta uma excecao do tipo DadosInvalidosException",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaValoresInvalidos()"
});
formatter.result({
  "duration": 417737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.0",
      "offset": 33
    },
    {
      "val": "-1.0",
      "offset": 39
    },
    {
      "val": "17",
      "offset": 46
    },
    {
      "val": "64",
      "offset": 51
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresInvalidos(double,double,int,int)"
});
formatter.result({
  "duration": 466778,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliandoResultado()"
});
formatter.result({
  "duration": 168663,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "testar valores invalidos",
  "description": "",
  "id": "avaliacao-escolar;testar-valores-invalidos;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "que quero testar valores invalidos",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "eu informar os valores invalidos 0.0 e 0.0 e -1 e 64",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema reporta uma excecao do tipo DadosInvalidosException",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaValoresInvalidos()"
});
formatter.result({
  "duration": 160283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.0",
      "offset": 33
    },
    {
      "val": "0.0",
      "offset": 39
    },
    {
      "val": "-1",
      "offset": 45
    },
    {
      "val": "64",
      "offset": 50
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresInvalidos(double,double,int,int)"
});
formatter.result({
  "duration": 902334,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliandoResultado()"
});
formatter.result({
  "duration": 168893,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "testar valores invalidos",
  "description": "",
  "id": "avaliacao-escolar;testar-valores-invalidos;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "que quero testar valores invalidos",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "eu informar os valores invalidos 0.0 e 0.0 e 16 e -64",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema reporta uma excecao do tipo DadosInvalidosException",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaValoresInvalidos()"
});
formatter.result({
  "duration": 262362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.0",
      "offset": 33
    },
    {
      "val": "0.0",
      "offset": 39
    },
    {
      "val": "16",
      "offset": 45
    },
    {
      "val": "-64",
      "offset": 50
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresInvalidos(double,double,int,int)"
});
formatter.result({
  "duration": 904596,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliandoResultado()"
});
formatter.result({
  "duration": 153724,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "testar valores invalidos",
  "description": "",
  "id": "avaliacao-escolar;testar-valores-invalidos;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "que quero testar valores invalidos",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "eu informar os valores invalidos 11.0 e 10.0 e 16 e 64",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema reporta uma excecao do tipo DadosInvalidosException",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaValoresInvalidos()"
});
formatter.result({
  "duration": 230438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11.0",
      "offset": 33
    },
    {
      "val": "10.0",
      "offset": 40
    },
    {
      "val": "16",
      "offset": 47
    },
    {
      "val": "64",
      "offset": 52
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresInvalidos(double,double,int,int)"
});
formatter.result({
  "duration": 917924,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliandoResultado()"
});
formatter.result({
  "duration": 153650,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "testar valores invalidos",
  "description": "",
  "id": "avaliacao-escolar;testar-valores-invalidos;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "que quero testar valores invalidos",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "eu informar os valores invalidos 10.0 e 11.0 e 16 e 64",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema reporta uma excecao do tipo DadosInvalidosException",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaValoresInvalidos()"
});
formatter.result({
  "duration": 167198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10.0",
      "offset": 33
    },
    {
      "val": "11.0",
      "offset": 40
    },
    {
      "val": "16",
      "offset": 47
    },
    {
      "val": "64",
      "offset": 52
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresInvalidos(double,double,int,int)"
});
formatter.result({
  "duration": 842566,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliandoResultado()"
});
formatter.result({
  "duration": 144274,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "testar valores invalidos",
  "description": "",
  "id": "avaliacao-escolar;testar-valores-invalidos;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "que quero testar valores invalidos",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "eu informar os valores invalidos 10.0 e 10.0 e 65 e 64",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema reporta uma excecao do tipo DadosInvalidosException",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaValoresInvalidos()"
});
formatter.result({
  "duration": 222454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10.0",
      "offset": 33
    },
    {
      "val": "10.0",
      "offset": 40
    },
    {
      "val": "65",
      "offset": 47
    },
    {
      "val": "64",
      "offset": 52
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresInvalidos(double,double,int,int)"
});
formatter.result({
  "duration": 918606,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliandoResultado()"
});
formatter.result({
  "duration": 145893,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "testar reprovacao por falta",
  "description": "",
  "id": "avaliacao-escolar;testar-reprovacao-por-falta",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "que eu quero testar a reprocao por falta",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "eu informar os valores \u003cnota1\u003e e \u003cnota2\u003e e \u003cfaltas\u003e e \u003ccargaHoraria\u003e , cuja quantidade de faltas supera o limite permitido",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "o sistema informa que o aluno foi reprovado por falta.",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "avaliacao-escolar;testar-reprovacao-por-falta;",
  "rows": [
    {
      "cells": [
        "nota1",
        "nota2",
        "faltas",
        "cargaHoraria"
      ],
      "line": 25,
      "id": "avaliacao-escolar;testar-reprovacao-por-falta;;1"
    },
    {
      "cells": [
        "6.5",
        "7.5",
        "17",
        "64"
      ],
      "line": 26,
      "id": "avaliacao-escolar;testar-reprovacao-por-falta;;2"
    },
    {
      "cells": [
        "8.0",
        "9.0",
        "64",
        "64"
      ],
      "line": 27,
      "id": "avaliacao-escolar;testar-reprovacao-por-falta;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "testar reprovacao por falta",
  "description": "",
  "id": "avaliacao-escolar;testar-reprovacao-por-falta;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "que eu quero testar a reprocao por falta",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "eu informar os valores 6.5 e 7.5 e 17 e 64 , cuja quantidade de faltas supera o limite permitido",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "o sistema informa que o aluno foi reprovado por falta.",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaReprovacaoPorFalta()"
});
formatter.result({
  "duration": 571222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6.5",
      "offset": 23
    },
    {
      "val": "7.5",
      "offset": 29
    },
    {
      "val": "17",
      "offset": 35
    },
    {
      "val": "64",
      "offset": 40
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresQueReprovamPorFalta(double,double,int,int)"
});
formatter.result({
  "duration": 819317,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliaReprovacaoPorFalta()"
});
formatter.result({
  "duration": 5993004,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "testar reprovacao por falta",
  "description": "",
  "id": "avaliacao-escolar;testar-reprovacao-por-falta;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "que eu quero testar a reprocao por falta",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "eu informar os valores 8.0 e 9.0 e 64 e 64 , cuja quantidade de faltas supera o limite permitido",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "o sistema informa que o aluno foi reprovado por falta.",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaReprovacaoPorFalta()"
});
formatter.result({
  "duration": 529224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8.0",
      "offset": 23
    },
    {
      "val": "9.0",
      "offset": 29
    },
    {
      "val": "64",
      "offset": 35
    },
    {
      "val": "64",
      "offset": 40
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresQueReprovamPorFalta(double,double,int,int)"
});
formatter.result({
  "duration": 723073,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliaReprovacaoPorFalta()"
});
formatter.result({
  "duration": 536725,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "testar prova extra",
  "description": "",
  "id": "avaliacao-escolar;testar-prova-extra",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "que eu quero testar a prova extra",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "eu informar os valores \u003cnota1\u003e e \u003cnota2\u003e e \u003cfaltas\u003e e \u003ccargaHoraria\u003e que garatem a prova extra",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "o sistema deve informar que o aluno devera fazer uma prova extra",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "avaliacao-escolar;testar-prova-extra;",
  "rows": [
    {
      "cells": [
        "nota1",
        "nota2",
        "faltas",
        "cargaHoraria"
      ],
      "line": 35,
      "id": "avaliacao-escolar;testar-prova-extra;;1"
    },
    {
      "cells": [
        "3.01",
        "3.01",
        "10",
        "64"
      ],
      "line": 36,
      "id": "avaliacao-escolar;testar-prova-extra;;2"
    },
    {
      "cells": [
        "5.99",
        "5.99",
        "10",
        "64"
      ],
      "line": 37,
      "id": "avaliacao-escolar;testar-prova-extra;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "testar prova extra",
  "description": "",
  "id": "avaliacao-escolar;testar-prova-extra;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "que eu quero testar a prova extra",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "eu informar os valores 3.01 e 3.01 e 10 e 64 que garatem a prova extra",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "o sistema deve informar que o aluno devera fazer uma prova extra",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaProvaExtra()"
});
formatter.result({
  "duration": 628648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3.01",
      "offset": 23
    },
    {
      "val": "3.01",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 37
    },
    {
      "val": "64",
      "offset": 42
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresQueGeramProvaExtra(double,double,int,int)"
});
formatter.result({
  "duration": 1007446,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliaProvaExtra()"
});
formatter.result({
  "duration": 143993,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "testar prova extra",
  "description": "",
  "id": "avaliacao-escolar;testar-prova-extra;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "que eu quero testar a prova extra",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "eu informar os valores 5.99 e 5.99 e 10 e 64 que garatem a prova extra",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "o sistema deve informar que o aluno devera fazer uma prova extra",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaProvaExtra()"
});
formatter.result({
  "duration": 473716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5.99",
      "offset": 23
    },
    {
      "val": "5.99",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 37
    },
    {
      "val": "64",
      "offset": 42
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresQueGeramProvaExtra(double,double,int,int)"
});
formatter.result({
  "duration": 577299,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliaProvaExtra()"
});
formatter.result({
  "duration": 66173,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "testar reprovacao por media",
  "description": "",
  "id": "avaliacao-escolar;testar-reprovacao-por-media",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "que eu quero testar reprovacao por media",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "eu informar os valores \u003cnota1\u003e e \u003cnota2\u003e e \u003cfaltas\u003e e \u003ccargaHoraria\u003e que garatem a reprovacao por media",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "o sistema deve informar que o aluno foi reprovado por media",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "avaliacao-escolar;testar-reprovacao-por-media;",
  "rows": [
    {
      "cells": [
        "nota1",
        "nota2",
        "faltas",
        "cargaHoraria"
      ],
      "line": 46,
      "id": "avaliacao-escolar;testar-reprovacao-por-media;;1"
    },
    {
      "cells": [
        "1.0",
        "1.0",
        "10",
        "64"
      ],
      "line": 47,
      "id": "avaliacao-escolar;testar-reprovacao-por-media;;2"
    },
    {
      "cells": [
        "2.99",
        "2.99",
        "10",
        "64"
      ],
      "line": 48,
      "id": "avaliacao-escolar;testar-reprovacao-por-media;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "testar reprovacao por media",
  "description": "",
  "id": "avaliacao-escolar;testar-reprovacao-por-media;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "que eu quero testar reprovacao por media",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "eu informar os valores 1.0 e 1.0 e 10 e 64 que garatem a reprovacao por media",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "o sistema deve informar que o aluno foi reprovado por media",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaReprovacaoPorMedia()"
});
formatter.result({
  "duration": 1260331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.0",
      "offset": 23
    },
    {
      "val": "1.0",
      "offset": 29
    },
    {
      "val": "10",
      "offset": 35
    },
    {
      "val": "64",
      "offset": 40
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresQueReprovamPorMedia(double,double,int,int)"
});
formatter.result({
  "duration": 980867,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliandoReprovacaoPorMedia()"
});
formatter.result({
  "duration": 155589,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "testar reprovacao por media",
  "description": "",
  "id": "avaliacao-escolar;testar-reprovacao-por-media;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "que eu quero testar reprovacao por media",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "eu informar os valores 2.99 e 2.99 e 10 e 64 que garatem a reprovacao por media",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "o sistema deve informar que o aluno foi reprovado por media",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaReprovacaoPorMedia()"
});
formatter.result({
  "duration": 1713733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.99",
      "offset": 23
    },
    {
      "val": "2.99",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 37
    },
    {
      "val": "64",
      "offset": 42
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresQueReprovamPorMedia(double,double,int,int)"
});
formatter.result({
  "duration": 898752,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliandoReprovacaoPorMedia()"
});
formatter.result({
  "duration": 72885,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "testar aprovacao",
  "description": "",
  "id": "avaliacao-escolar;testar-aprovacao",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "que eu quero testar a aprovacao",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "eu informar os valores \u003cnota1\u003e e \u003cnota2\u003e e \u003cfaltas\u003e e \u003ccargaHoraria\u003e que garatem a aprovacao",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "o sistema deve informar que o aluno foi aprovado",
  "keyword": "Then "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "avaliacao-escolar;testar-aprovacao;",
  "rows": [
    {
      "cells": [
        "nota1",
        "nota2",
        "faltas",
        "cargaHoraria"
      ],
      "line": 56,
      "id": "avaliacao-escolar;testar-aprovacao;;1"
    },
    {
      "cells": [
        "6.01",
        "6.01",
        "10",
        "64"
      ],
      "line": 57,
      "id": "avaliacao-escolar;testar-aprovacao;;2"
    },
    {
      "cells": [
        "10.00",
        "10.00",
        "10",
        "64"
      ],
      "line": 58,
      "id": "avaliacao-escolar;testar-aprovacao;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 57,
  "name": "testar aprovacao",
  "description": "",
  "id": "avaliacao-escolar;testar-aprovacao;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "que eu quero testar a aprovacao",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "eu informar os valores 6.01 e 6.01 e 10 e 64 que garatem a aprovacao",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "o sistema deve informar que o aluno foi aprovado",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaAprovacao()"
});
formatter.result({
  "duration": 287846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6.01",
      "offset": 23
    },
    {
      "val": "6.01",
      "offset": 30
    },
    {
      "val": "10",
      "offset": 37
    },
    {
      "val": "64",
      "offset": 42
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresQueAprovam(double,double,int,int)"
});
formatter.result({
  "duration": 589825,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliaAprovacao()"
});
formatter.result({
  "duration": 95512,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "testar aprovacao",
  "description": "",
  "id": "avaliacao-escolar;testar-aprovacao;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "que eu quero testar a aprovacao",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "eu informar os valores 10.00 e 10.00 e 10 e 64 que garatem a aprovacao",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "o sistema deve informar que o aluno foi aprovado",
  "keyword": "Then "
});
formatter.match({
  "location": "AvaliacaoTesteBdd.testaAprovacao()"
});
formatter.result({
  "duration": 533192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10.00",
      "offset": 23
    },
    {
      "val": "10.00",
      "offset": 31
    },
    {
      "val": "10",
      "offset": 39
    },
    {
      "val": "64",
      "offset": 44
    }
  ],
  "location": "AvaliacaoTesteBdd.informarValoresQueAprovam(double,double,int,int)"
});
formatter.result({
  "duration": 562422,
  "status": "passed"
});
formatter.match({
  "location": "AvaliacaoTesteBdd.avaliaAprovacao()"
});
formatter.result({
  "duration": 86506,
  "status": "passed"
});
});