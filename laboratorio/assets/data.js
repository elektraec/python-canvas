window.B26_WEEKS = [
  {
    "week": 1,
    "title": "Pensamiento computacional y resolución de problemas",
    "focus": "Descomposición, entrada–proceso–salida, secuencia lógica y pseudocódigo elemental.",
    "language": "PSeInt",
    "exercises": [
      {
        "title": "Consumo diario de agua",
        "statement": "Una instalación tiene 18 usuarios y cada persona consume en promedio 35 litros de agua al día. Determinar el consumo total diario. Antes de programar, identificar entradas, proceso y salida.",
        "reasoning": [
          "Entradas: número de usuarios = 18; consumo promedio = 35 L/día.",
          "Proceso: multiplicar usuarios × consumo promedio.",
          "Salida: consumo total diario.",
          "Cálculo: 18 × 35 = 630 litros/día.",
          "Secuencia lógica: leer datos → calcular consumo total → mostrar resultado."
        ],
        "solution": "Algoritmo ConsumoAgua\n  usuarios <- 18\n  consumo_promedio <- 35\n  total <- usuarios * consumo_promedio\n  Escribir \"Consumo total diario: \", total, \" litros\"\nFinAlgoritmo",
        "expected": "630 litros por día.",
        "check": {
          "type": "number",
          "question": "¿Cuál es el consumo total diario en litros?",
          "answer": 630
        }
      },
      {
        "title": "Tiempo para llenar un tanque",
        "statement": "Un tanque de 1200 litros se llena con un caudal constante de 40 litros por minuto. ¿Cuánto tiempo tarda en llenarse?",
        "reasoning": [
          "Entrada: capacidad = 1200 L; caudal = 40 L/min.",
          "Proceso: tiempo = capacidad / caudal.",
          "Salida: tiempo de llenado.",
          "Cálculo: 1200 / 40 = 30 minutos."
        ],
        "solution": "Inicio\n  Leer capacidad\n  Leer caudal\n  tiempo <- capacidad / caudal\n  Mostrar tiempo\nFin",
        "expected": "30 minutos.",
        "check": {
          "type": "number",
          "question": "¿Cuántos minutos tarda en llenarse?",
          "answer": 30
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Un actuador avanza 4 mm por ciclo. ¿Cuántos milímetros avanza en 25 ciclos?",
        "100 mm."
      ],
      [
        "Eléctrica",
        "Una carga consume 150 W durante 4 h. Calcular energía en Wh.",
        "600 Wh."
      ],
      [
        "Industrial",
        "Una línea produce 48 unidades por hora durante 7 h.",
        "336 unidades."
      ]
    ],
    "flow_steps": [
      "Entradas: número de usuarios = 18; consumo promedio = 35 L/día.",
      "Proceso: multiplicar usuarios × consumo promedio.",
      "Salida: consumo total diario.",
      "Cálculo: 18 × 35 = 630 litros/día.",
      "Secuencia lógica: leer datos → calcular consumo total → mostrar resultado."
    ],
    "parsons": {
      "title": "Ordena la solución de: Consumo diario de agua",
      "lines": [
        "Algoritmo ConsumoAgua",
        "  usuarios <- 18",
        "  consumo_promedio <- 35",
        "  total <- usuarios * consumo_promedio",
        "  Escribir \"Consumo total diario: \", total, \" litros\"",
        "FinAlgoritmo"
      ]
    },
    "concepts": [
      {
        "term": "Pensamiento computacional",
        "definition": "Forma de abordar problemas mediante descomposición, reconocimiento de patrones, abstracción y diseño de pasos que puedan ejecutarse o automatizarse."
      },
      {
        "term": "Descomposición",
        "definition": "Dividir un problema grande en partes más pequeñas y manejables."
      },
      {
        "term": "Entrada–proceso–salida",
        "definition": "Modelo para identificar qué datos recibe una solución, qué operaciones realiza y qué resultados produce."
      },
      {
        "term": "Algoritmo",
        "definition": "Secuencia finita y ordenada de pasos para resolver un problema."
      }
    ],
    "study_tip": "Antes de escribir pseudocódigo, identifica siempre entradas, proceso y salida.",
    "references": [
      {
        "title": "PSeInt — sitio oficial",
        "url": "https://pseint.sourceforge.net/",
        "note": "Úsalo como apoyo para practicar algoritmos, pseudocódigo y diagramas antes de programar en Python."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Cuál opción describe mejor un algoritmo?",
        "options": [
          "Una secuencia ordenada de pasos",
          "Un conjunto de datos sin ordenar",
          "Un lenguaje usado solo en Python",
          "Una gráfica de resultados numéricos"
        ],
        "correct": 0
      },
      {
        "category": "Comprensión",
        "question": "¿Qué significa descomponer un problema?",
        "options": [
          "Resolverlo sin dividir tareas",
          "Separarlo en partes manejables",
          "Eliminar los datos de entrada",
          "Repetir siempre el mismo paso"
        ],
        "correct": 1
      },
      {
        "category": "Comprensión",
        "question": "En el modelo entrada–proceso–salida, ¿qué representa el voltaje medido por un sensor antes de calcular la potencia?",
        "options": [
          "Proceso",
          "Salida",
          "Entrada",
          "Algoritmo"
        ],
        "correct": 2
      },
      {
        "category": "Ejercicio",
        "question": "Un tanque vacío tiene capacidad de 600 L y recibe un caudal constante de 50 L/min. ¿Qué pseudocódigo calcula correctamente el tiempo de llenado?",
        "options": [
          "tiempo <- 600 / 50",
          "tiempo <- 600 * 50",
          "tiempo <- 50 / 600",
          "tiempo <- 600 + 50"
        ],
        "correct": 0
      },
      {
        "category": "Ejercicio",
        "question": "Un sensor registra 20 °C, 22 °C y 24 °C. ¿Qué expresión calcula correctamente el promedio?",
        "options": [
          "(20 + 22 + 24) / 3",
          "20 + 22 + (24 / 3)",
          "(20 * 22 * 24) / 3",
          "(20 + 22 + 24) * 3"
        ],
        "correct": 0
      },
      {
        "category": "Aplicación",
        "question": "Se desea calcular potencia con P = V × I. ¿Cuál secuencia entrada–proceso–salida es correcta?",
        "options": [
          "V e I → multiplicar → P",
          "P → dividir → V e I",
          "V → sumar → I",
          "I y P → restar → V"
        ],
        "correct": 0
      },
      {
        "category": "Pensamiento computacional",
        "question": "Para controlar el llenado automático de un tanque, ¿qué descomposición es más adecuada?",
        "options": [
          "Medir nivel → decidir → activar/detener bomba",
          "Encender bomba → ignorar nivel → esperar",
          "Mostrar resultado → borrar datos → medir",
          "Repetir lectura → no decidir → finalizar"
        ],
        "correct": 0
      }
    ]
  },
  {
    "week": 2,
    "title": "Algoritmos secuenciales, variables y operadores",
    "focus": "Variables, tipos básicos, asignación, Leer/Escribir y expresiones aritméticas en PSeInt.",
    "language": "PSeInt",
    "exercises": [
      {
        "title": "Promedio de tres mediciones",
        "statement": "Solicitar tres mediciones reales y calcular su promedio.",
        "reasoning": [
          "Definir tres variables de entrada y una variable para el promedio.",
          "Leer las tres mediciones.",
          "Aplicar (m1 + m2 + m3) / 3.",
          "Mostrar el promedio."
        ],
        "solution": "Algoritmo PromedioMediciones\n  Definir m1, m2, m3, promedio Como Real\n  Escribir \"Medicion 1:\"\n  Leer m1\n  Escribir \"Medicion 2:\"\n  Leer m2\n  Escribir \"Medicion 3:\"\n  Leer m3\n  promedio <- (m1 + m2 + m3) / 3\n  Escribir \"Promedio = \", promedio\nFinAlgoritmo",
        "expected": "Si se ingresan 10, 12 y 14, el promedio es 12.",
        "check": {
          "type": "number",
          "question": "Para 10, 12 y 14, ¿cuál es el promedio?",
          "answer": 12
        }
      },
      {
        "title": "Conversión de temperatura",
        "statement": "Leer una temperatura en grados Celsius y convertirla a Fahrenheit utilizando F = C × 9/5 + 32.",
        "reasoning": [
          "Entrada: temperatura Celsius.",
          "Proceso: aplicar la fórmula respetando la prioridad de operadores.",
          "Salida: temperatura Fahrenheit."
        ],
        "solution": "Algoritmo CelsiusAFahrenheit\n  Definir celsius, fahrenheit Como Real\n  Escribir \"Ingrese temperatura en Celsius:\"\n  Leer celsius\n  fahrenheit <- celsius * 9 / 5 + 32\n  Escribir \"Temperatura en Fahrenheit: \", fahrenheit\nFinAlgoritmo",
        "expected": "25 °C equivalen a 77 °F.",
        "check": {
          "type": "number",
          "question": "¿A cuántos °F equivalen 25 °C?",
          "answer": 77
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Calcular velocidad lineal: distancia / tiempo. Ej.: 12 m / 3 s.",
        "4 m/s."
      ],
      [
        "Eléctrica",
        "Calcular potencia: P = V × I. Ej.: 120 V × 2.5 A.",
        "300 W."
      ],
      [
        "Industrial",
        "Calcular productividad: unidades / horas-hombre. Ej.: 240 / 12.",
        "20 unid/h-h."
      ]
    ],
    "flow_steps": [
      "Definir tres variables de entrada y una variable para el promedio.",
      "Leer las tres mediciones.",
      "Aplicar (m1 + m2 + m3) / 3.",
      "Mostrar el promedio."
    ],
    "parsons": {
      "title": "Ordena la solución de: Promedio de tres mediciones",
      "lines": [
        "Algoritmo PromedioMediciones",
        "  Definir m1, m2, m3, promedio Como Real",
        "  Escribir \"Medicion 1:\"",
        "  Leer m1",
        "  Escribir \"Medicion 2:\"",
        "  Leer m2",
        "  Escribir \"Medicion 3:\"",
        "  Leer m3",
        "  promedio <- (m1 + m2 + m3) / 3",
        "  Escribir \"Promedio = \", promedio"
      ]
    },
    "concepts": [
      {
        "term": "Variable",
        "definition": "Nombre que referencia un valor que puede utilizarse y cambiar durante la ejecución."
      },
      {
        "term": "Asignación",
        "definition": "Operación que guarda o actualiza un valor en una variable."
      },
      {
        "term": "Operador aritmético",
        "definition": "Símbolo que realiza operaciones como suma, resta, multiplicación o división."
      },
      {
        "term": "Expresión",
        "definition": "Combinación de valores, variables y operadores que produce un resultado."
      }
    ],
    "study_tip": "Revisa los conceptos clave antes de resolver y comprueba tus resultados con al menos un caso sencillo.",
    "references": [
      {
        "title": "PSeInt — sitio oficial",
        "url": "https://pseint.sourceforge.net/",
        "note": "Apoyo para variables, entrada/salida, operadores y expresiones en pseudocódigo."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Nombre que referencia un valor que puede utilizarse y cambiar durante la ejecución.",
        "options": [
          "Expresión",
          "Asignación",
          "Operador aritmético",
          "Variable"
        ],
        "correct": 3
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Operación que guarda o actualiza un valor en una variable.",
        "options": [
          "Operador aritmético",
          "Expresión",
          "Variable",
          "Asignación"
        ],
        "correct": 3
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Símbolo que realiza operaciones como suma, resta, multiplicación o división.",
        "options": [
          "Operador aritmético",
          "Asignación",
          "Expresión",
          "Variable"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Combinación de valores, variables y operadores que produce un resultado.",
        "options": [
          "Asignación",
          "Variable",
          "Operador aritmético",
          "Expresión"
        ],
        "correct": 3
      },
      {
        "category": "Ejercicio",
        "question": "Promedio de tres mediciones Solicitar tres mediciones reales y calcular su promedio. Para 10, 12 y 14, ¿cuál es el promedio?",
        "options": [
          "24",
          "13",
          "12",
          "6"
        ],
        "correct": 2
      },
      {
        "category": "Ejercicio",
        "question": "Conversión de temperatura Leer una temperatura en grados Celsius y convertirla a Fahrenheit utilizando F = C × 9/5 + 32. ¿A cuántos °F equivalen 25 °C?",
        "options": [
          "154",
          "38.5",
          "78",
          "77"
        ],
        "correct": 3
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Nombre que referencia un valor que puede utilizarse y cambiar durante la ejecución.",
        "options": [
          "Variable",
          "Entrada",
          "Expresión",
          "Proceso"
        ],
        "correct": 0
      }
    ]
  },
  {
    "week": 3,
    "title": "Estructuras condicionales y lógica",
    "focus": "Operadores relacionales y lógicos; Si, SiNo, condiciones múltiples y anidadas.",
    "language": "PSeInt",
    "exercises": [
      {
        "title": "Clasificación por límite",
        "statement": "Leer una medición y un límite máximo. Si la medición supera el límite, mostrar «ALERTA»; en caso contrario, mostrar «NORMAL».",
        "reasoning": [
          "Comparar medición > límite.",
          "Si es verdadero, mostrar alerta.",
          "Si es falso, mostrar normal."
        ],
        "solution": "Algoritmo ControlLimite\n  Definir medicion, limite Como Real\n  Leer medicion\n  Leer limite\n  Si medicion > limite Entonces\n    Escribir \"ALERTA\"\n  SiNo\n    Escribir \"NORMAL\"\n  FinSi\nFinAlgoritmo",
        "expected": "Con medición 82 y límite 80 → ALERTA; con 75 y límite 80 → NORMAL.",
        "check": {
          "type": "text",
          "question": "Con medición 82 y límite 80, escribe el resultado.",
          "answer": "ALERTA"
        }
      },
      {
        "title": "Clasificación en tres niveles",
        "statement": "Una variable de desempeño se clasifica como BAJO si es menor que 60, MEDIO si está entre 60 y 79, y ALTO si es 80 o superior.",
        "reasoning": [
          "Evaluar primero valor < 60.",
          "Si no se cumple, evaluar valor < 80.",
          "Si tampoco se cumple, clasificar como ALTO."
        ],
        "solution": "Algoritmo Clasificacion\n  Definir valor Como Real\n  Leer valor\n  Si valor < 60 Entonces\n    Escribir \"BAJO\"\n  SiNo\n    Si valor < 80 Entonces\n      Escribir \"MEDIO\"\n    SiNo\n      Escribir \"ALTO\"\n    FinSi\n  FinSi\nFinAlgoritmo",
        "expected": "55 → BAJO; 72 → MEDIO; 91 → ALTO.",
        "check": {
          "type": "text",
          "question": "¿Cómo se clasifica el valor 72?",
          "answer": "MEDIO"
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Si temperatura > 70 °C, activar advertencia.",
        "temperatura > 70"
      ],
      [
        "Eléctrica",
        "Si voltaje está entre 110 y 125 V, estado normal.",
        "voltaje >= 110 Y voltaje <= 125"
      ],
      [
        "Industrial",
        "Si stock < stock_mínimo, solicitar reposición.",
        "stock < mínimo"
      ]
    ],
    "flow_steps": [
      "Comparar medición > límite.",
      "Si es verdadero, mostrar alerta.",
      "Si es falso, mostrar normal."
    ],
    "parsons": {
      "title": "Ordena la solución de: Clasificación por límite",
      "lines": [
        "Algoritmo ControlLimite",
        "  Definir medicion, limite Como Real",
        "  Leer medicion",
        "  Leer limite",
        "  Si medicion > limite Entonces",
        "    Escribir \"ALERTA\"",
        "  SiNo",
        "    Escribir \"NORMAL\"",
        "  FinSi",
        "FinAlgoritmo"
      ]
    },
    "concepts": [
      {
        "term": "Condición",
        "definition": "Expresión que se evalúa como verdadera o falsa y permite tomar decisiones."
      },
      {
        "term": "Operador relacional",
        "definition": "Compara valores, por ejemplo mayor que, menor que o igual."
      },
      {
        "term": "Operador lógico",
        "definition": "Combina o modifica condiciones, por ejemplo AND/Y, OR/O y NOT/NO."
      },
      {
        "term": "Condicional",
        "definition": "Estructura que ejecuta diferentes instrucciones según una condición."
      }
    ],
    "study_tip": "Prueba cada condición con un valor que la cumpla y otro que no.",
    "references": [
      {
        "title": "PSeInt — sitio oficial",
        "url": "https://pseint.sourceforge.net/",
        "note": "Apoyo para condiciones, decisiones y estructuras Si / SiNo."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Expresión que se evalúa como verdadera o falsa y permite tomar decisiones.",
        "options": [
          "Operador relacional",
          "Condición",
          "Condicional",
          "Operador lógico"
        ],
        "correct": 1
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Compara valores, por ejemplo mayor que, menor que o igual.",
        "options": [
          "Operador relacional",
          "Operador lógico",
          "Condicional",
          "Condición"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Combina o modifica condiciones, por ejemplo AND/Y, OR/O y NOT/NO.",
        "options": [
          "Condicional",
          "Operador lógico",
          "Operador relacional",
          "Condición"
        ],
        "correct": 1
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Estructura que ejecuta diferentes instrucciones según una condición.",
        "options": [
          "Condición",
          "Operador lógico",
          "Operador relacional",
          "Condicional"
        ],
        "correct": 3
      },
      {
        "category": "Ejercicio",
        "question": "Clasificación por límite Leer una medición y un límite máximo. Si la medición supera el límite, mostrar «ALERTA»; en caso contrario, mostrar «NORMAL». Con medición 82 y límite 80, escribe el resultado.",
        "options": [
          "Falso",
          "ALERTA",
          "Ninguna",
          "Salida"
        ],
        "correct": 1
      },
      {
        "category": "Ejercicio",
        "question": "Clasificación en tres niveles Una variable de desempeño se clasifica como BAJO si es menor que 60, MEDIO si está entre 60 y 79, y ALTO si es 80 o superior. ¿Cómo se clasifica el valor 72?",
        "options": [
          "MEDIO",
          "Falso",
          "Ninguna",
          "Salida"
        ],
        "correct": 0
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Expresión que se evalúa como verdadera o falsa y permite tomar decisiones.",
        "options": [
          "Condicional",
          "Condición",
          "Entrada",
          "Algoritmo"
        ],
        "correct": 1
      }
    ]
  },
  {
    "week": 4,
    "title": "Transición de PSeInt a Python",
    "focus": "print(), input(), conversiones, operadores e if/elif/else; traducción directa desde PSeInt.",
    "language": "Python",
    "exercises": [
      {
        "title": "Traducir el control de límite",
        "statement": "Traducir a Python el algoritmo de la semana anterior que compara una medición con un límite.",
        "reasoning": [
          "input() devuelve texto; convertir a float.",
          "Usar dos puntos al final de if y else.",
          "Indentar el bloque que pertenece a cada condición."
        ],
        "solution": "medicion = float(input(\"Ingrese la medicion: \"))\nlimite = float(input(\"Ingrese el limite: \"))\nif medicion > limite:\n    print(\"ALERTA\")\nelse:\n    print(\"NORMAL\")",
        "expected": "La lógica es la misma que en PSeInt; cambia únicamente la sintaxis.",
        "starter": "medicion = 82\nlimite = 80\n# Completa la condición\nif medicion > limite:\n    print(\"ALERTA\")\nelse:\n    print(\"NORMAL\")",
        "check": {
          "type": "text",
          "question": "Si medicion=82 y limite=80, ¿qué imprime?",
          "answer": "ALERTA"
        }
      },
      {
        "title": "Costo total con validación básica",
        "statement": "Leer cantidad y precio unitario. Calcular el total. Si el total es mayor o igual a 100, mostrar además «Compra de alto valor».",
        "reasoning": [
          "Leer cantidad como int y precio como float.",
          "Calcular total = cantidad * precio.",
          "Mostrar total.",
          "Evaluar total >= 100."
        ],
        "solution": "cantidad = int(input(\"Cantidad: \"))\nprecio = float(input(\"Precio unitario: \"))\ntotal = cantidad * precio\nprint(\"Total:\", total)\nif total >= 100:\n    print(\"Compra de alto valor\")",
        "expected": "10 unidades a 12.5 → total 125.0 y se muestra el mensaje adicional.",
        "starter": "cantidad = 10\nprecio = 12.5\ntotal = cantidad * precio\nprint(\"Total:\", total)\nif total >= 100:\n    print(\"Compra de alto valor\")",
        "check": {
          "type": "number",
          "question": "¿Cuál es el total para 10 unidades a 12.5?",
          "answer": 125
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Traducir a Python una alarma de temperatura.",
        "if temperatura > limite: print('ALERTA')"
      ],
      [
        "Eléctrica",
        "Calcular P=V×I y avisar si P supera 1000 W.",
        "Calcular y luego comparar potencia > 1000."
      ],
      [
        "Industrial",
        "Calcular producción y avisar si alcanza meta.",
        "if produccion >= meta: ..."
      ]
    ],
    "flow_steps": [
      "input() devuelve texto; convertir a float.",
      "Usar dos puntos al final de if y else.",
      "Indentar el bloque que pertenece a cada condición."
    ],
    "parsons": {
      "title": "Ordena la solución de: Traducir el control de límite",
      "lines": [
        "medicion = float(input(\"Ingrese la medicion: \"))",
        "limite = float(input(\"Ingrese el limite: \"))",
        "if medicion > limite:",
        "    print(\"ALERTA\")",
        "else:",
        "    print(\"NORMAL\")"
      ]
    },
    "concepts": [
      {
        "term": "Python",
        "definition": "Lenguaje de programación de propósito general con sintaxis legible y amplia biblioteca estándar."
      },
      {
        "term": "input()",
        "definition": "Función que recibe texto introducido por el usuario."
      },
      {
        "term": "Conversión de tipo",
        "definition": "Transformación explícita de un dato, por ejemplo de texto a int o float."
      },
      {
        "term": "Indentación",
        "definition": "Espacios al inicio de una línea que en Python delimitan bloques de código."
      }
    ],
    "study_tip": "Compara una solución en PSeInt con su versión en Python y observa qué cambia y qué permanece.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español: una introducción informal",
        "url": "https://docs.python.org/es/3/tutorial/introduction.html",
        "note": "Consulta ejemplos básicos de números, texto, variables y primeras expresiones."
      },
      {
        "title": "Python — Tutorial oficial en español: control de flujo",
        "url": "https://docs.python.org/es/3/tutorial/controlflow.html",
        "note": "Revisa if, elif, else e indentación."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Lenguaje de programación de propósito general con sintaxis legible y amplia biblioteca estándar.",
        "options": [
          "Python",
          "input()",
          "Conversión de tipo",
          "Indentación"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Función que recibe texto introducido por el usuario.",
        "options": [
          "Indentación",
          "Python",
          "input()",
          "Conversión de tipo"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Transformación explícita de un dato, por ejemplo de texto a int o float.",
        "options": [
          "input()",
          "Indentación",
          "Conversión de tipo",
          "Python"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Espacios al inicio de una línea que en Python delimitan bloques de código.",
        "options": [
          "Indentación",
          "Conversión de tipo",
          "Python",
          "input()"
        ],
        "correct": 0
      },
      {
        "category": "Ejercicio",
        "question": "Traducir el control de límite Traducir a Python el algoritmo de la semana anterior que compara una medición con un límite. Si medicion=82 y limite=80, ¿qué imprime?",
        "options": [
          "ALERTA",
          "Salida",
          "Python",
          "input()"
        ],
        "correct": 0
      },
      {
        "category": "Ejercicio",
        "question": "Costo total con validación básica Leer cantidad y precio unitario. Calcular el total. Si el total es mayor o igual a 100, mostrar además «Compra de alto valor». ¿Cuál es el total para 10 unidades a 12.5?",
        "options": [
          "126",
          "125",
          "250",
          "62.5"
        ],
        "correct": 1
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Lenguaje de programación de propósito general con sintaxis legible y amplia biblioteca estándar.",
        "options": [
          "Entrada",
          "Salida",
          "Python",
          "input()"
        ],
        "correct": 2
      }
    ]
  },
  {
    "week": 5,
    "title": "Estructuras repetitivas: while",
    "focus": "Repetición por condición, contador, acumulador, centinela, validación y prevención de ciclos infinitos.",
    "language": "Python",
    "exercises": [
      {
        "title": "Validar una entrada",
        "statement": "Solicitar una calificación entre 0 y 10. Mientras el usuario ingrese un valor fuera del rango, volver a solicitarlo.",
        "reasoning": [
          "Leer el valor inicial.",
          "Mientras valor < 0 o valor > 10, mostrar error y volver a leer.",
          "Al terminar el ciclo, el dato es válido."
        ],
        "solution": "nota = float(input(\"Nota entre 0 y 10: \"))\nwhile nota < 0 or nota > 10:\n    print(\"Valor fuera de rango\")\n    nota = float(input(\"Ingrese nuevamente: \"))\nprint(\"Nota valida:\", nota)",
        "expected": "Si se ingresan 15, -2 y 8.5, el programa rechaza los dos primeros y acepta 8.5.",
        "starter": "nota = 8.5\nwhile nota < 0 or nota > 10:\n    print(\"Valor fuera de rango\")\nprint(\"Nota valida:\", nota)",
        "check": {
          "type": "text",
          "question": "¿8.5 es una nota válida? Responde SI o NO.",
          "answer": "SI"
        }
      },
      {
        "title": "Acumular hasta alcanzar una meta",
        "statement": "Registrar valores positivos hasta que la suma acumulada alcance o supere 100. Mostrar cuántos valores fueron necesarios y la suma final.",
        "reasoning": [
          "Inicializar suma = 0 y contador = 0.",
          "Mientras suma < 100, leer un valor.",
          "Acumular y aumentar contador.",
          "Al salir, mostrar resultados."
        ],
        "solution": "suma = 0\ncontador = 0\nwhile suma < 100:\n    valor = float(input(\"Ingrese valor positivo: \"))\n    if valor > 0:\n        suma += valor\n        contador += 1\n    else:\n        print(\"El valor debe ser positivo\")\nprint(\"Cantidad de valores:\", contador)\nprint(\"Suma final:\", suma)",
        "expected": "Con 30, 25, 20 y 35 → 4 valores y suma 110.",
        "starter": "valores = [30, 25, 20, 35]\nsuma = 0\ncontador = 0\ni = 0\nwhile suma < 100:\n    valor = valores[i]\n    i += 1\n    if valor > 0:\n        suma += valor\n        contador += 1\nprint(\"Cantidad de valores:\", contador)\nprint(\"Suma final:\", suma)",
        "check": {
          "type": "number",
          "question": "Con 30, 25, 20 y 35, ¿cuál es la suma final?",
          "answer": 110
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Leer temperatura hasta que alcance 60 °C.",
        "while temperatura < 60:"
      ],
      [
        "Eléctrica",
        "Solicitar voltaje hasta ingresar uno entre 110 y 125 V.",
        "while voltaje < 110 or voltaje > 125:"
      ],
      [
        "Industrial",
        "Acumular producción hasta completar una orden de 500 unidades.",
        "while total < 500:"
      ]
    ],
    "flow_steps": [
      "Leer el valor inicial.",
      "Mientras valor < 0 o valor > 10, mostrar error y volver a leer.",
      "Al terminar el ciclo, el dato es válido."
    ],
    "parsons": {
      "title": "Ordena la solución de: Validar una entrada",
      "lines": [
        "nota = float(input(\"Nota entre 0 y 10: \"))",
        "while nota < 0 or nota > 10:",
        "    print(\"Valor fuera de rango\")",
        "    nota = float(input(\"Ingrese nuevamente: \"))",
        "print(\"Nota valida:\", nota)"
      ]
    },
    "concepts": [
      {
        "term": "while",
        "definition": "Ciclo que repite un bloque mientras una condición sea verdadera."
      },
      {
        "term": "Contador",
        "definition": "Variable que registra cuántas veces ocurre un evento."
      },
      {
        "term": "Acumulador",
        "definition": "Variable que combina progresivamente valores, normalmente mediante una suma."
      },
      {
        "term": "Ciclo infinito",
        "definition": "Repetición que no termina porque la condición de salida nunca se cumple."
      }
    ],
    "study_tip": "En cada while identifica: estado inicial, condición y actualización.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español: while y control de flujo",
        "url": "https://docs.python.org/es/3/tutorial/introduction.html#first-steps-towards-programming",
        "note": "Ejemplos introductorios de repetición con while."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Ciclo que repite un bloque mientras una condición sea verdadera.",
        "options": [
          "while",
          "Contador",
          "Acumulador",
          "Ciclo infinito"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Variable que registra cuántas veces ocurre un evento.",
        "options": [
          "Contador",
          "Acumulador",
          "Ciclo infinito",
          "while"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Variable que combina progresivamente valores, normalmente mediante una suma.",
        "options": [
          "while",
          "Contador",
          "Acumulador",
          "Ciclo infinito"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Repetición que no termina porque la condición de salida nunca se cumple.",
        "options": [
          "Contador",
          "while",
          "Ciclo infinito",
          "Acumulador"
        ],
        "correct": 2
      },
      {
        "category": "Ejercicio",
        "question": "Validar una entrada Solicitar una calificación entre 0 y 10. Mientras el usuario ingrese un valor fuera del rango, volver a solicitarlo. ¿8.5 es una nota válida? Responde SI o NO.",
        "options": [
          "SI",
          "Falso",
          "Salida",
          "while"
        ],
        "correct": 0
      },
      {
        "category": "Ejercicio",
        "question": "Acumular hasta alcanzar una meta Registrar valores positivos hasta que la suma acumulada alcance o supere 100. Mostrar cuántos valores fueron necesarios y la suma final. Con 30, 25, 20 y 35, ¿cuál es la suma final?",
        "options": [
          "110",
          "111",
          "55",
          "220"
        ],
        "correct": 0
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Ciclo que repite un bloque mientras una condición sea verdadera.",
        "options": [
          "Salida",
          "Proceso",
          "while",
          "Entrada"
        ],
        "correct": 2
      }
    ]
  },
  {
    "week": 6,
    "title": "Estructuras repetitivas: for",
    "focus": "range(), repeticiones conocidas, conteo, acumulación, promedio, máximo y mínimo.",
    "language": "Python",
    "exercises": [
      {
        "title": "Promedio de cinco mediciones",
        "statement": "Solicitar cinco mediciones utilizando for, acumularlas y calcular el promedio.",
        "reasoning": [
          "Inicializar suma = 0.",
          "Repetir 5 veces.",
          "Leer una medición y sumarla.",
          "Al finalizar, dividir entre 5."
        ],
        "solution": "suma = 0\nfor i in range(5):\n    valor = float(input(f\"Medicion {i + 1}: \"))\n    suma += valor\npromedio = suma / 5\nprint(\"Promedio:\", promedio)",
        "expected": "Para 10, 12, 8, 15 y 5 → promedio 10.",
        "starter": "mediciones = [10, 12, 8, 15, 5]\nsuma = 0\nfor valor in mediciones:\n    suma += valor\npromedio = suma / 5\nprint(\"Promedio:\", promedio)",
        "check": {
          "type": "number",
          "question": "Para 10, 12, 8, 15 y 5, ¿cuál es el promedio?",
          "answer": 10
        }
      },
      {
        "title": "Máximo y mínimo sin listas",
        "statement": "Leer cinco valores y determinar el mayor y el menor sin utilizar listas.",
        "reasoning": [
          "Leer el primer valor antes del ciclo y asignarlo a máximo y mínimo.",
          "Repetir cuatro veces para leer los restantes.",
          "Actualizar máximo o mínimo cuando corresponda."
        ],
        "solution": "valor = float(input(\"Valor 1: \"))\nmaximo = valor\nminimo = valor\nfor i in range(2, 6):\n    valor = float(input(f\"Valor {i}: \"))\n    if valor > maximo:\n        maximo = valor\n    if valor < minimo:\n        minimo = valor\nprint(\"Maximo:\", maximo)\nprint(\"Minimo:\", minimo)",
        "expected": "Para 7, 3, 10, 6 y 4 → máximo 10; mínimo 3.",
        "starter": "datos = [7, 3, 10, 6, 4]\nmaximo = datos[0]\nminimo = datos[0]\nfor valor in datos[1:]:\n    if valor > maximo:\n        maximo = valor\n    if valor < minimo:\n        minimo = valor\nprint(\"Maximo:\", maximo)\nprint(\"Minimo:\", minimo)",
        "check": {
          "type": "number",
          "question": "Para 7, 3, 10, 6 y 4, ¿cuál es el máximo?",
          "answer": 10
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Procesar 8 lecturas de sensor y contar cuántas superan 50.",
        "for + if + contador."
      ],
      [
        "Eléctrica",
        "Procesar 24 consumos horarios y calcular total.",
        "for range(24) + acumulador."
      ],
      [
        "Industrial",
        "Registrar producción de 7 días y hallar máximo/mínimo.",
        "for + variables max/min."
      ]
    ],
    "flow_steps": [
      "Inicializar suma = 0.",
      "Repetir 5 veces.",
      "Leer una medición y sumarla.",
      "Al finalizar, dividir entre 5."
    ],
    "parsons": {
      "title": "Ordena la solución de: Promedio de cinco mediciones",
      "lines": [
        "suma = 0",
        "for i in range(5):",
        "    valor = float(input(f\"Medicion {i + 1}: \"))",
        "    suma += valor",
        "promedio = suma / 5",
        "print(\"Promedio:\", promedio)"
      ]
    },
    "concepts": [
      {
        "term": "for",
        "definition": "Ciclo utilizado para recorrer una secuencia o repetir un conjunto conocido de iteraciones."
      },
      {
        "term": "range()",
        "definition": "Función que genera una secuencia de enteros útil en ciclos for."
      },
      {
        "term": "Iteración",
        "definition": "Una ejecución individual del cuerpo de un ciclo."
      },
      {
        "term": "Máximo y mínimo",
        "definition": "Valores extremos de un conjunto de datos."
      }
    ],
    "study_tip": "Revisa los conceptos clave antes de resolver y comprueba tus resultados con al menos un caso sencillo.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español: for y range()",
        "url": "https://docs.python.org/es/3/tutorial/controlflow.html#for-statements",
        "note": "Ejemplos directos de for, range() y recorridos."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Ciclo utilizado para recorrer una secuencia o repetir un conjunto conocido de iteraciones.",
        "options": [
          "for",
          "Máximo y mínimo",
          "range()",
          "Iteración"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Función que genera una secuencia de enteros útil en ciclos for.",
        "options": [
          "Máximo y mínimo",
          "range()",
          "for",
          "Iteración"
        ],
        "correct": 1
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Una ejecución individual del cuerpo de un ciclo.",
        "options": [
          "for",
          "range()",
          "Iteración",
          "Máximo y mínimo"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Valores extremos de un conjunto de datos.",
        "options": [
          "Máximo y mínimo",
          "for",
          "range()",
          "Iteración"
        ],
        "correct": 0
      },
      {
        "category": "Ejercicio",
        "question": "Promedio de cinco mediciones Solicitar cinco mediciones utilizando for, acumularlas y calcular el promedio. Para 10, 12, 8, 15 y 5, ¿cuál es el promedio?",
        "options": [
          "20",
          "10",
          "5",
          "11"
        ],
        "correct": 1
      },
      {
        "category": "Ejercicio",
        "question": "Máximo y mínimo sin listas Leer cinco valores y determinar el mayor y el menor sin utilizar listas. Para 7, 3, 10, 6 y 4, ¿cuál es el máximo?",
        "options": [
          "11",
          "10",
          "5",
          "20"
        ],
        "correct": 1
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Ciclo utilizado para recorrer una secuencia o repetir un conjunto conocido de iteraciones.",
        "options": [
          "range()",
          "Salida",
          "Entrada",
          "for"
        ],
        "correct": 3
      }
    ]
  },
  {
    "week": 7,
    "title": "Funciones y modularización",
    "focus": "def, parámetros, argumentos, return, variables locales y descomposición del problema.",
    "language": "Python",
    "exercises": [
      {
        "title": "Función para calcular promedio",
        "statement": "Crear una función que reciba tres valores y retorne su promedio. Luego usarla desde el programa principal.",
        "reasoning": [
          "Definir la función promedio(a,b,c).",
          "Calcular y retornar el valor.",
          "Solicitar datos fuera de la función.",
          "Invocar y mostrar el resultado."
        ],
        "solution": "def promedio(a, b, c):\n    return (a + b + c) / 3\n\nx = 6\ny = 8\nz = 10\nresultado = promedio(x, y, z)\nprint(\"Promedio:\", resultado)",
        "expected": "Con 6, 8 y 10 → 8.0.",
        "starter": "def promedio(a, b, c):\n    return (a + b + c) / 3\n\nprint(promedio(6, 8, 10))",
        "check": {
          "type": "number",
          "question": "¿Qué retorna promedio(6,8,10)?",
          "answer": 8
        }
      },
      {
        "title": "Programa modular de validación y cálculo",
        "statement": "Crear una función es_valido(valor, minimo, maximo) que retorne True o False y otra función calcular_potencia(v, i).",
        "reasoning": [
          "Separar la validación del cálculo.",
          "Cada función debe realizar una sola tarea.",
          "El programa principal decide qué hacer con el resultado."
        ],
        "solution": "def es_valido(valor, minimo, maximo):\n    return minimo <= valor <= maximo\n\ndef calcular_potencia(voltaje, corriente):\n    return voltaje * corriente\n\nv = 120\ni = 2\nif es_valido(v, 0, 500) and es_valido(i, 0, 100):\n    print(\"Potencia:\", calcular_potencia(v, i))\nelse:\n    print(\"Datos fuera de rango\")",
        "expected": "Con 120 V y 2 A → Potencia: 240.0.",
        "starter": "def calcular_potencia(voltaje, corriente):\n    return voltaje * corriente\n\nprint(calcular_potencia(120, 2))",
        "check": {
          "type": "number",
          "question": "¿Cuál es la potencia para 120 V y 2 A?",
          "answer": 240
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "def error_posicion(objetivo, actual)",
        "return objetivo - actual"
      ],
      [
        "Eléctrica",
        "def energia(potencia, horas)",
        "return potencia * horas"
      ],
      [
        "Industrial",
        "def eficiencia(real, teorica)",
        "return real / teorica * 100"
      ]
    ],
    "flow_steps": [
      "Definir la función promedio(a,b,c).",
      "Calcular y retornar el valor.",
      "Solicitar datos fuera de la función.",
      "Invocar y mostrar el resultado."
    ],
    "parsons": {
      "title": "Ordena la solución de: Función para calcular promedio",
      "lines": [
        "def promedio(a, b, c):",
        "    return (a + b + c) / 3",
        "x = 6",
        "y = 8",
        "z = 10",
        "resultado = promedio(x, y, z)",
        "print(\"Promedio:\", resultado)"
      ]
    },
    "concepts": [
      {
        "term": "Función",
        "definition": "Bloque reutilizable de código que realiza una tarea específica."
      },
      {
        "term": "Parámetro",
        "definition": "Nombre definido en una función para recibir un dato."
      },
      {
        "term": "Argumento",
        "definition": "Valor concreto enviado a una función al invocarla."
      },
      {
        "term": "return",
        "definition": "Instrucción que finaliza una función y devuelve un valor."
      }
    ],
    "study_tip": "Una buena función realiza una tarea clara y puede probarse de manera independiente.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español: definición de funciones",
        "url": "https://docs.python.org/es/3/tutorial/controlflow.html#defining-functions",
        "note": "Explica def, parámetros, argumentos y return."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Bloque reutilizable de código que realiza una tarea específica.",
        "options": [
          "Parámetro",
          "Argumento",
          "Función",
          "return"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Nombre definido en una función para recibir un dato.",
        "options": [
          "return",
          "Parámetro",
          "Argumento",
          "Función"
        ],
        "correct": 1
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Valor concreto enviado a una función al invocarla.",
        "options": [
          "Parámetro",
          "Función",
          "return",
          "Argumento"
        ],
        "correct": 3
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Instrucción que finaliza una función y devuelve un valor.",
        "options": [
          "Parámetro",
          "Argumento",
          "Función",
          "return"
        ],
        "correct": 3
      },
      {
        "category": "Ejercicio",
        "question": "Función para calcular promedio Crear una función que reciba tres valores y retorne su promedio. Luego usarla desde el programa principal. ¿Qué retorna promedio(6,8,10)?",
        "options": [
          "4",
          "9",
          "8",
          "16"
        ],
        "correct": 2
      },
      {
        "category": "Ejercicio",
        "question": "Programa modular de validación y cálculo Crear una función es_valido(valor, minimo, maximo) que retorne True o False y otra función calcular_potencia(v, i). ¿Cuál es la potencia para 120 V y 2 A?",
        "options": [
          "120",
          "241",
          "480",
          "240"
        ],
        "correct": 3
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Bloque reutilizable de código que realiza una tarea específica.",
        "options": [
          "return",
          "Proceso",
          "Función",
          "Entrada"
        ],
        "correct": 2
      }
    ]
  },
  {
    "week": 8,
    "title": "Integración de programación estructurada",
    "focus": "Variables, condicionales, ciclos, funciones, trazado, errores básicos y pruebas.",
    "language": "Python",
    "exercises": [
      {
        "title": "Monitoreo de diez mediciones",
        "statement": "Registrar 10 mediciones. Calcular promedio, contar cuántas superan un límite y mostrar el mayor valor. Resolver con funciones, for y condicionales, todavía sin listas.",
        "reasoning": [
          "Crear una función para decidir si una medición supera el límite.",
          "Inicializar suma, contador_alertas y máximo.",
          "Leer 10 valores con for.",
          "Actualizar suma, alertas y máximo.",
          "Calcular promedio y mostrar resultados."
        ],
        "solution": "def supera_limite(valor, limite):\n    return valor > limite\n\nlimite = 50\ndatos = [42, 51, 48, 60, 55, 39, 70, 45, 52, 49]\nsuma = 0\nalertas = 0\nmaximo = None\nfor valor in datos:\n    suma += valor\n    if maximo is None or valor > maximo:\n        maximo = valor\n    if supera_limite(valor, limite):\n        alertas += 1\npromedio = suma / 10\nprint(\"Promedio:\", promedio)\nprint(\"Maximo:\", maximo)\nprint(\"Alertas:\", alertas)",
        "expected": "El resultado depende de las 10 mediciones; comprobar manualmente con un conjunto pequeño antes de usarlo en clase.",
        "starter": "datos = [42, 51, 48, 60, 55, 39, 70, 45, 52, 49]\nlimite = 50\nalertas = 0\nfor valor in datos:\n    if valor > limite:\n        alertas += 1\nprint(\"Alertas:\", alertas)",
        "check": {
          "type": "number",
          "question": "Con los datos de ejemplo y límite 50, ¿cuántas alertas hay?",
          "answer": 5
        }
      },
      {
        "title": "Trazado y corrección",
        "statement": "Analizar el siguiente código, identificar el error y corregirlo: contador debe aumentar hasta 5, pero el programa no termina.",
        "reasoning": [
          "La condición depende de contador.",
          "Dentro del ciclo contador nunca cambia.",
          "Por eso contador <= 5 permanece verdadero.",
          "Agregar contador += 1 dentro del while."
        ],
        "solution": "contador = 1\nwhile contador <= 5:\n    print(contador)\n    contador += 1",
        "expected": "La actualización del contador evita el ciclo infinito.",
        "starter": "contador = 1\nwhile contador <= 5:\n    print(contador)\n    contador += 1",
        "check": {
          "type": "text",
          "question": "¿Qué instrucción faltaba? Escribe: contador += 1",
          "answer": "CONTADOR += 1"
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "10 lecturas de temperatura; promedio y alarmas.",
        "Misma estructura del ejercicio 1."
      ],
      [
        "Eléctrica",
        "10 valores de corriente; promedio y sobrecorrientes.",
        "Cambiar nombre de variable y límite."
      ],
      [
        "Industrial",
        "10 registros de producción; promedio y días bajo meta.",
        "Cambiar la condición a valor < meta."
      ]
    ],
    "flow_steps": [
      "Crear una función para decidir si una medición supera el límite.",
      "Inicializar suma, contador_alertas y máximo.",
      "Leer 10 valores con for.",
      "Actualizar suma, alertas y máximo.",
      "Calcular promedio y mostrar resultados."
    ],
    "parsons": {
      "title": "Ordena la solución de: Monitoreo de diez mediciones",
      "lines": [
        "def supera_limite(valor, limite):",
        "    return valor > limite",
        "limite = 50",
        "datos = [42, 51, 48, 60, 55, 39, 70, 45, 52, 49]",
        "suma = 0",
        "alertas = 0",
        "maximo = None",
        "for valor in datos:",
        "    suma += valor",
        "    if maximo is None or valor > maximo:"
      ]
    },
    "concepts": [
      {
        "term": "Programación estructurada",
        "definition": "Organización de programas mediante secuencias, decisiones, ciclos y funciones."
      },
      {
        "term": "Trazado",
        "definition": "Seguimiento paso a paso de variables e instrucciones para comprender la ejecución."
      },
      {
        "term": "Caso de prueba",
        "definition": "Conjunto de entradas y resultado esperado usado para comprobar un programa."
      },
      {
        "term": "Depuración",
        "definition": "Proceso sistemático de localizar, comprender y corregir errores."
      }
    ],
    "study_tip": "Revisa los conceptos clave antes de resolver y comprueba tus resultados con al menos un caso sencillo.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español: errores y excepciones",
        "url": "https://docs.python.org/es/3/tutorial/errors.html",
        "note": "Úsalo para repasar errores, pruebas y depuración básica."
      },
      {
        "title": "Python — Tutorial oficial en español",
        "url": "https://docs.python.org/es/3/tutorial/",
        "note": "Referencia general para repasar programación estructurada."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Organización de programas mediante secuencias, decisiones, ciclos y funciones.",
        "options": [
          "Caso de prueba",
          "Programación estructurada",
          "Depuración",
          "Trazado"
        ],
        "correct": 1
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Seguimiento paso a paso de variables e instrucciones para comprender la ejecución.",
        "options": [
          "Caso de prueba",
          "Depuración",
          "Programación estructurada",
          "Trazado"
        ],
        "correct": 3
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Conjunto de entradas y resultado esperado usado para comprobar un programa.",
        "options": [
          "Caso de prueba",
          "Programación estructurada",
          "Trazado",
          "Depuración"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Proceso sistemático de localizar, comprender y corregir errores.",
        "options": [
          "Caso de prueba",
          "Trazado",
          "Programación estructurada",
          "Depuración"
        ],
        "correct": 3
      },
      {
        "category": "Ejercicio",
        "question": "Monitoreo de diez mediciones Registrar 10 mediciones. Calcular promedio, contar cuántas superan un límite y mostrar el mayor valor. Resolver con funciones, for y condicionales, todavía sin listas. Con los datos de ejemplo y límite 50, ¿cuántas alertas hay?",
        "options": [
          "2.5",
          "6",
          "5",
          "10"
        ],
        "correct": 2
      },
      {
        "category": "Ejercicio",
        "question": "Trazado y corrección Analizar el siguiente código, identificar el error y corregirlo: contador debe aumentar hasta 5, pero el programa no termina. ¿Qué instrucción faltaba? Escribe: contador += 1",
        "options": [
          "# opción 4",
          "CONTADOR -= 1",
          "CONTADOR += 1",
          "# opción 3"
        ],
        "correct": 2
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Organización de programas mediante secuencias, decisiones, ciclos y funciones.",
        "options": [
          "Algoritmo",
          "Depuración",
          "Programación estructurada",
          "Caso de prueba"
        ],
        "correct": 2
      }
    ]
  },
  {
    "week": 10,
    "title": "Listas y colecciones de datos",
    "focus": "Creación, índices, modificación, append(), len(), recorridos, suma, promedio, máximo, mínimo, conteo y búsqueda.",
    "language": "Python",
    "exercises": [
      {
        "title": "Procesar una lista de mediciones",
        "statement": "Dada la lista [12.5, 10.8, 15.2, 9.7, 13.1], calcular promedio, máximo y mínimo.",
        "reasoning": [
          "La lista almacena varias mediciones en una sola variable.",
          "Usar sum() y len() para el promedio.",
          "Usar max() y min() para extremos."
        ],
        "solution": "mediciones = [12.5, 10.8, 15.2, 9.7, 13.1]\npromedio = sum(mediciones) / len(mediciones)\nprint(\"Promedio:\", promedio)\nprint(\"Maximo:\", max(mediciones))\nprint(\"Minimo:\", min(mediciones))",
        "expected": "Promedio = 12.26; máximo = 15.2; mínimo = 9.7.",
        "starter": "mediciones = [12.5, 10.8, 15.2, 9.7, 13.1]\nprint(sum(mediciones) / len(mediciones))\nprint(max(mediciones))\nprint(min(mediciones))",
        "check": {
          "type": "number",
          "question": "¿Cuál es el máximo de la lista?",
          "answer": 15.2
        }
      },
      {
        "title": "Construir una lista y contar alertas",
        "statement": "Solicitar 5 datos, almacenarlos en una lista y contar cuántos son mayores que 50.",
        "reasoning": [
          "Crear lista vacía.",
          "Usar append() dentro de for.",
          "Recorrer la lista para contar valores > 50."
        ],
        "solution": "datos = [40, 55, 60, 20, 80]\nalertas = 0\nfor valor in datos:\n    if valor > 50:\n        alertas += 1\nprint(\"Datos:\", datos)\nprint(\"Mayores que 50:\", alertas)",
        "expected": "Si se ingresan 40, 55, 60, 20, 80 → 3 valores mayores que 50.",
        "starter": "datos = [40, 55, 60, 20, 80]\nalertas = sum(1 for x in datos if x > 50)\nprint(alertas)",
        "check": {
          "type": "number",
          "question": "¿Cuántos valores son mayores que 50?",
          "answer": 3
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Lista de velocidades de un motor.",
        "Promedio, máximo y cantidad > límite."
      ],
      [
        "Eléctrica",
        "Lista de voltajes medidos.",
        "Buscar valores fuera de rango."
      ],
      [
        "Industrial",
        "Lista de producción diaria.",
        "Promedio y días que superan la meta."
      ]
    ],
    "flow_steps": [
      "La lista almacena varias mediciones en una sola variable.",
      "Usar sum() y len() para el promedio.",
      "Usar max() y min() para extremos."
    ],
    "parsons": {
      "title": "Ordena la solución de: Procesar una lista de mediciones",
      "lines": [
        "mediciones = [12.5, 10.8, 15.2, 9.7, 13.1]",
        "promedio = sum(mediciones) / len(mediciones)",
        "print(\"Promedio:\", promedio)",
        "print(\"Maximo:\", max(mediciones))",
        "print(\"Minimo:\", min(mediciones))"
      ]
    },
    "concepts": [
      {
        "term": "Lista",
        "definition": "Colección ordenada y mutable de elementos en Python."
      },
      {
        "term": "Índice",
        "definition": "Posición de un elemento dentro de una secuencia; en Python suele comenzar en 0."
      },
      {
        "term": "append()",
        "definition": "Método que agrega un elemento al final de una lista."
      },
      {
        "term": "Recorrido",
        "definition": "Proceso de visitar los elementos de una colección uno por uno."
      }
    ],
    "study_tip": "Revisa los conceptos clave antes de resolver y comprueba tus resultados con al menos un caso sencillo.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español: listas",
        "url": "https://docs.python.org/es/3/tutorial/introduction.html#lists",
        "note": "Explica listas, índices y operaciones básicas."
      },
      {
        "title": "Python — Tutorial oficial en español: estructuras de datos",
        "url": "https://docs.python.org/es/3/tutorial/datastructures.html",
        "note": "Amplía operaciones y recorridos con listas."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Colección ordenada y mutable de elementos en Python.",
        "options": [
          "Índice",
          "Lista",
          "append()",
          "Recorrido"
        ],
        "correct": 1
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Posición de un elemento dentro de una secuencia; en Python suele comenzar en 0.",
        "options": [
          "Lista",
          "append()",
          "Recorrido",
          "Índice"
        ],
        "correct": 3
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Método que agrega un elemento al final de una lista.",
        "options": [
          "Recorrido",
          "Índice",
          "append()",
          "Lista"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Proceso de visitar los elementos de una colección uno por uno.",
        "options": [
          "Recorrido",
          "append()",
          "Índice",
          "Lista"
        ],
        "correct": 0
      },
      {
        "category": "Ejercicio",
        "question": "Procesar una lista de mediciones Dada la lista [12.5, 10.8, 15.2, 9.7, 13.1], calcular promedio, máximo y mínimo. ¿Cuál es el máximo de la lista?",
        "options": [
          "16.2",
          "7.6",
          "15.2",
          "30.4"
        ],
        "correct": 2
      },
      {
        "category": "Ejercicio",
        "question": "Construir una lista y contar alertas Solicitar 5 datos, almacenarlos en una lista y contar cuántos son mayores que 50. ¿Cuántos valores son mayores que 50?",
        "options": [
          "4",
          "1.5",
          "3",
          "6"
        ],
        "correct": 2
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Colección ordenada y mutable de elementos en Python.",
        "options": [
          "Lista",
          "Salida",
          "Índice",
          "Entrada"
        ],
        "correct": 0
      }
    ]
  },
  {
    "week": 11,
    "title": "Datos tabulares y estructuras básicas",
    "focus": "Listas anidadas, matrices sencillas, tuplas, diccionarios y selección de estructuras.",
    "language": "Python",
    "exercises": [
      {
        "title": "Matriz de mediciones",
        "statement": "Representar mediciones de 3 equipos durante 4 periodos y calcular el promedio de cada equipo.",
        "reasoning": [
          "Cada fila representa un equipo.",
          "Cada columna representa un periodo.",
          "Recorrer fila por fila y calcular sum(fila)/len(fila)."
        ],
        "solution": "mediciones = [\n    [10, 12, 11, 13],\n    [20, 18, 22, 21],\n    [7, 8, 9, 8]\n]\nfor i, fila in enumerate(mediciones):\n    promedio = sum(fila) / len(fila)\n    print(f\"Equipo {i + 1}: promedio = {promedio}\")",
        "expected": "Equipo 1 = 11.5; Equipo 2 = 20.25; Equipo 3 = 8.0.",
        "starter": "mediciones = [[10,12,11,13],[20,18,22,21],[7,8,9,8]]\nfor i, fila in enumerate(mediciones):\n    print(i+1, sum(fila)/len(fila))",
        "check": {
          "type": "number",
          "question": "¿Cuál es el promedio del Equipo 2?",
          "answer": 20.25
        }
      },
      {
        "title": "Registro con diccionario",
        "statement": "Representar un equipo con código, nombre, estado y valor actual usando un diccionario.",
        "reasoning": [
          "Las claves describen qué significa cada dato.",
          "Los valores pueden ser de diferentes tipos.",
          "Acceder a cada campo mediante su clave."
        ],
        "solution": "equipo = {\n    \"codigo\": \"EQ-01\",\n    \"nombre\": \"Equipo principal\",\n    \"estado\": \"activo\",\n    \"valor\": 72.5\n}\nprint(\"Codigo:\", equipo[\"codigo\"])\nprint(\"Estado:\", equipo[\"estado\"])\nprint(\"Valor:\", equipo[\"valor\"])",
        "expected": "Se muestran los tres campos solicitados; el registro queda organizado por significado.",
        "starter": "equipo = {\"codigo\":\"EQ-01\",\"nombre\":\"Equipo principal\",\"estado\":\"activo\",\"valor\":72.5}\nprint(equipo[\"codigo\"], equipo[\"estado\"], equipo[\"valor\"])",
        "check": {
          "type": "text",
          "question": "¿Cuál es el estado del equipo?",
          "answer": "ACTIVO"
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Matriz sensores × periodos.",
        "Lista anidada es adecuada."
      ],
      [
        "Eléctrica",
        "Diccionario por circuito: id, voltaje, corriente, estado.",
        "Diccionario facilita campos heterogéneos."
      ],
      [
        "Industrial",
        "Matriz líneas × turnos; tupla para coordenadas fijas.",
        "Elegir estructura según mutabilidad y significado."
      ]
    ],
    "flow_steps": [
      "Cada fila representa un equipo.",
      "Cada columna representa un periodo.",
      "Recorrer fila por fila y calcular sum(fila)/len(fila)."
    ],
    "parsons": {
      "title": "Ordena la solución de: Matriz de mediciones",
      "lines": [
        "mediciones = [",
        "    [10, 12, 11, 13],",
        "    [20, 18, 22, 21],",
        "    [7, 8, 9, 8]",
        "]",
        "for i, fila in enumerate(mediciones):",
        "    promedio = sum(fila) / len(fila)",
        "    print(f\"Equipo {i + 1}: promedio = {promedio}\")"
      ]
    },
    "concepts": [
      {
        "term": "Lista anidada",
        "definition": "Lista cuyos elementos pueden ser otras listas; puede representar tablas o matrices sencillas."
      },
      {
        "term": "Tupla",
        "definition": "Secuencia ordenada e inmutable."
      },
      {
        "term": "Diccionario",
        "definition": "Colección de pares clave–valor."
      },
      {
        "term": "Estructura de datos",
        "definition": "Forma de organizar datos para almacenarlos y procesarlos."
      }
    ],
    "study_tip": "Revisa los conceptos clave antes de resolver y comprueba tus resultados con al menos un caso sencillo.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español: estructuras de datos",
        "url": "https://docs.python.org/es/3/tutorial/datastructures.html",
        "note": "Consulta listas, tuplas, conjuntos y diccionarios para comparar estructuras."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Lista cuyos elementos pueden ser otras listas; puede representar tablas o matrices sencillas.",
        "options": [
          "Diccionario",
          "Tupla",
          "Estructura de datos",
          "Lista anidada"
        ],
        "correct": 3
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Secuencia ordenada e inmutable.",
        "options": [
          "Tupla",
          "Estructura de datos",
          "Diccionario",
          "Lista anidada"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Colección de pares clave–valor.",
        "options": [
          "Estructura de datos",
          "Lista anidada",
          "Diccionario",
          "Tupla"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Forma de organizar datos para almacenarlos y procesarlos.",
        "options": [
          "Estructura de datos",
          "Lista anidada",
          "Diccionario",
          "Tupla"
        ],
        "correct": 0
      },
      {
        "category": "Ejercicio",
        "question": "Matriz de mediciones Representar mediciones de 3 equipos durante 4 periodos y calcular el promedio de cada equipo. ¿Cuál es el promedio del Equipo 2?",
        "options": [
          "10.12",
          "21.25",
          "40.5",
          "20.25"
        ],
        "correct": 3
      },
      {
        "category": "Ejercicio",
        "question": "Registro con diccionario Representar un equipo con código, nombre, estado y valor actual usando un diccionario. ¿Cuál es el estado del equipo?",
        "options": [
          "Falso",
          "ACTIVO",
          "Tupla",
          "Salida"
        ],
        "correct": 1
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Lista cuyos elementos pueden ser otras listas; puede representar tablas o matrices sencillas.",
        "options": [
          "Diccionario",
          "Lista anidada",
          "Estructura de datos",
          "Algoritmo"
        ],
        "correct": 1
      }
    ]
  },
  {
    "week": 12,
    "title": "Cadenas y procesamiento de información",
    "focus": "Índices, recorridos, comparación, búsqueda, transformación, validación e integración con listas.",
    "language": "Python",
    "exercises": [
      {
        "title": "Normalizar un código",
        "statement": "Leer un código ingresado por el usuario, eliminar espacios externos y convertirlo a mayúsculas.",
        "reasoning": [
          "strip() elimina espacios iniciales y finales.",
          "upper() convierte a mayúsculas.",
          "Comparar el resultado con un formato esperado."
        ],
        "solution": "codigo = \" eq-15 \"\ncodigo = codigo.strip().upper()\nprint(\"Codigo normalizado:\", codigo)",
        "expected": "Entrada « eq-15 » → salida «EQ-15».",
        "starter": "codigo = \" eq-15 \"\nprint(codigo.strip().upper())",
        "check": {
          "type": "text",
          "question": "¿Cuál es el código normalizado de « eq-15 »?",
          "answer": "EQ-15"
        }
      },
      {
        "title": "Buscar registros por prefijo",
        "statement": "Dada una lista de códigos, mostrar únicamente los que empiezan por «TEMP».",
        "reasoning": [
          "Recorrer la lista.",
          "Usar startswith('TEMP').",
          "Mostrar los registros que cumplen."
        ],
        "solution": "codigos = [\"TEMP-01\", \"MOT-02\", \"TEMP-03\", \"PRES-01\"]\nfor codigo in codigos:\n    if codigo.startswith(\"TEMP\"):\n        print(codigo)",
        "expected": "TEMP-01 y TEMP-03.",
        "starter": "codigos = [\"TEMP-01\", \"MOT-02\", \"TEMP-03\", \"PRES-01\"]\nprint([c for c in codigos if c.startswith(\"TEMP\")])",
        "check": {
          "type": "number",
          "question": "¿Cuántos códigos empiezan por TEMP?",
          "answer": 2
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Validar que un identificador empiece por SEN-.",
        "startswith('SEN-')"
      ],
      [
        "Eléctrica",
        "Separar etiqueta CIR-01-220V por guiones.",
        "split('-')"
      ],
      [
        "Industrial",
        "Normalizar códigos de producto a mayúsculas.",
        "strip().upper()"
      ]
    ],
    "flow_steps": [
      "strip() elimina espacios iniciales y finales.",
      "upper() convierte a mayúsculas.",
      "Comparar el resultado con un formato esperado."
    ],
    "parsons": {
      "title": "Ordena la solución de: Normalizar un código",
      "lines": [
        "codigo = \" eq-15 \"",
        "codigo = codigo.strip().upper()",
        "print(\"Codigo normalizado:\", codigo)"
      ]
    },
    "concepts": [
      {
        "term": "Cadena (str)",
        "definition": "Secuencia de caracteres utilizada para representar texto."
      },
      {
        "term": "strip()",
        "definition": "Método que elimina espacios de los extremos de una cadena."
      },
      {
        "term": "upper()",
        "definition": "Método que devuelve una versión en mayúsculas de una cadena."
      },
      {
        "term": "startswith()",
        "definition": "Método que comprueba si una cadena comienza con un prefijo."
      }
    ],
    "study_tip": "Revisa los conceptos clave antes de resolver y comprueba tus resultados con al menos un caso sencillo.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español: cadenas",
        "url": "https://docs.python.org/es/3/tutorial/introduction.html#text",
        "note": "Ejemplos claros de texto, índices, cortes y operaciones con cadenas."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Secuencia de caracteres utilizada para representar texto.",
        "options": [
          "Cadena (str)",
          "startswith()",
          "upper()",
          "strip()"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Método que elimina espacios de los extremos de una cadena.",
        "options": [
          "Cadena (str)",
          "startswith()",
          "strip()",
          "upper()"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Método que devuelve una versión en mayúsculas de una cadena.",
        "options": [
          "upper()",
          "startswith()",
          "strip()",
          "Cadena (str)"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Método que comprueba si una cadena comienza con un prefijo.",
        "options": [
          "strip()",
          "startswith()",
          "upper()",
          "Cadena (str)"
        ],
        "correct": 1
      },
      {
        "category": "Ejercicio",
        "question": "Normalizar un código Leer un código ingresado por el usuario, eliminar espacios externos y convertirlo a mayúsculas. ¿Cuál es el código normalizado de « eq-15 »?",
        "options": [
          "Salida",
          "Falso",
          "strip()",
          "EQ-15"
        ],
        "correct": 3
      },
      {
        "category": "Ejercicio",
        "question": "Buscar registros por prefijo Dada una lista de códigos, mostrar únicamente los que empiezan por «TEMP». ¿Cuántos códigos empiezan por TEMP?",
        "options": [
          "2",
          "1",
          "4",
          "3"
        ],
        "correct": 0
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Secuencia de caracteres utilizada para representar texto.",
        "options": [
          "Algoritmo",
          "Cadena (str)",
          "startswith()",
          "strip()"
        ],
        "correct": 1
      }
    ]
  },
  {
    "week": 13,
    "title": "Archivos y datos CSV",
    "focus": "Lectura/escritura de texto, CSV, conversión de datos y almacenamiento en listas.",
    "language": "Python",
    "exercises": [
      {
        "title": "Leer un archivo de texto",
        "statement": "Suponer que datos.txt contiene una medición por línea. Leer todas las líneas, convertirlas a float y calcular el promedio.",
        "reasoning": [
          "Abrir con with open(...).",
          "Recorrer líneas.",
          "Aplicar strip() y float().",
          "Guardar en lista y calcular promedio."
        ],
        "solution": "# En el laboratorio web se simula el contenido del archivo:\ncontenido = \"10\\n12\\n14\\n\"\nmediciones = [float(linea.strip()) for linea in contenido.splitlines()]\npromedio = sum(mediciones) / len(mediciones)\nprint(\"Promedio:\", promedio)",
        "expected": "Si el archivo contiene 10, 12 y 14 → promedio 12.0.",
        "starter": "contenido = \"10\\n12\\n14\\n\"\nmediciones = [float(x) for x in contenido.splitlines()]\nprint(sum(mediciones)/len(mediciones))",
        "check": {
          "type": "number",
          "question": "Si datos.txt contiene 10, 12 y 14, ¿cuál es el promedio?",
          "answer": 12
        }
      },
      {
        "title": "Procesar un CSV sencillo",
        "statement": "Archivo mediciones.csv: codigo,valor. Mostrar el código y el valor de cada fila y calcular el promedio de valores.",
        "reasoning": [
          "Importar csv.",
          "Usar csv.DictReader para trabajar con nombres de columnas.",
          "Convertir valor a float.",
          "Acumular en una lista."
        ],
        "solution": "import csv, io\ntexto = \"codigo,valor\\nA,10\\nB,12\\nC,14\\n\"\nvalores = []\nlector = csv.DictReader(io.StringIO(texto))\nfor fila in lector:\n    valor = float(fila[\"valor\"])\n    valores.append(valor)\n    print(fila[\"codigo\"], valor)\nprint(\"Promedio:\", sum(valores) / len(valores))",
        "expected": "El resultado depende del archivo; el ejemplo incluido produce promedio 12.0.",
        "starter": "import csv, io\ntexto = \"codigo,valor\\nA,10\\nB,12\\nC,14\\n\"\nfilas = list(csv.DictReader(io.StringIO(texto)))\nprint(filas)",
        "check": {
          "type": "number",
          "question": "Con valores 10, 12 y 14, ¿cuál es el promedio?",
          "answer": 12
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "CSV con sensor,tiempo,temperatura.",
        "Procesar columna temperatura."
      ],
      [
        "Eléctrica",
        "CSV con circuito,voltaje,corriente.",
        "Calcular potencia por fila."
      ],
      [
        "Industrial",
        "CSV con fecha,linea,produccion.",
        "Calcular total y promedio de producción."
      ]
    ],
    "flow_steps": [
      "Abrir con with open(...).",
      "Recorrer líneas.",
      "Aplicar strip() y float().",
      "Guardar en lista y calcular promedio."
    ],
    "parsons": {
      "title": "Ordena la solución de: Leer un archivo de texto",
      "lines": [
        "# En el laboratorio web se simula el contenido del archivo:",
        "contenido = \"10\\n12\\n14\\n\"",
        "mediciones = [float(linea.strip()) for linea in contenido.splitlines()]",
        "promedio = sum(mediciones) / len(mediciones)",
        "print(\"Promedio:\", promedio)"
      ]
    },
    "concepts": [
      {
        "term": "Archivo",
        "definition": "Recurso persistente que almacena datos fuera de la ejecución inmediata del programa."
      },
      {
        "term": "CSV",
        "definition": "Formato de texto tabular en el que cada fila contiene campos separados por un delimitador."
      },
      {
        "term": "with open(...)",
        "definition": "Patrón de Python para abrir un archivo y asegurar su cierre al finalizar el bloque."
      },
      {
        "term": "csv.DictReader",
        "definition": "Herramienta de la biblioteca estándar que interpreta cada fila CSV como un diccionario."
      }
    ],
    "study_tip": "Revisa los conceptos clave antes de resolver y comprueba tus resultados con al menos un caso sencillo.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español: lectura y escritura de archivos",
        "url": "https://docs.python.org/es/3/tutorial/inputoutput.html#reading-and-writing-files",
        "note": "Introducción a open(), with y lectura/escritura de archivos."
      },
      {
        "title": "Python — Biblioteca estándar: csv",
        "url": "https://docs.python.org/es/3/library/csv.html",
        "note": "Referencia para csv.reader y csv.DictReader."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Recurso persistente que almacena datos fuera de la ejecución inmediata del programa.",
        "options": [
          "Archivo",
          "csv.DictReader",
          "CSV",
          "with open(...)"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Formato de texto tabular en el que cada fila contiene campos separados por un delimitador.",
        "options": [
          "CSV",
          "with open(...)",
          "Archivo",
          "csv.DictReader"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Patrón de Python para abrir un archivo y asegurar su cierre al finalizar el bloque.",
        "options": [
          "Archivo",
          "csv.DictReader",
          "with open(...)",
          "CSV"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Herramienta de la biblioteca estándar que interpreta cada fila CSV como un diccionario.",
        "options": [
          "csv.DictReader",
          "CSV",
          "with open(...)",
          "Archivo"
        ],
        "correct": 0
      },
      {
        "category": "Ejercicio",
        "question": "Leer un archivo de texto Suponer que datos.txt contiene una medición por línea. Leer todas las líneas, convertirlas a float y calcular el promedio. Si datos.txt contiene 10, 12 y 14, ¿cuál es el promedio?",
        "options": [
          "24",
          "13",
          "6",
          "12"
        ],
        "correct": 3
      },
      {
        "category": "Ejercicio",
        "question": "Procesar un CSV sencillo Archivo mediciones.csv: codigo,valor. Mostrar el código y el valor de cada fila y calcular el promedio de valores. Con valores 10, 12 y 14, ¿cuál es el promedio?",
        "options": [
          "13",
          "24",
          "12",
          "6"
        ],
        "correct": 2
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Recurso persistente que almacena datos fuera de la ejecución inmediata del programa.",
        "options": [
          "Salida",
          "Proceso",
          "Archivo",
          "Entrada"
        ],
        "correct": 2
      }
    ]
  },
  {
    "week": 14,
    "title": "Búsqueda y ordenamiento",
    "focus": "Búsqueda lineal, concepto de búsqueda binaria, sort(), sorted() y comparación intuitiva de estrategias.",
    "language": "Python",
    "exercises": [
      {
        "title": "Búsqueda lineal",
        "statement": "Buscar el valor 22 dentro de la lista [15, 18, 22, 13, 27] e indicar su posición.",
        "reasoning": [
          "Recorrer la lista desde el inicio.",
          "Comparar cada elemento con el objetivo.",
          "Cuando coincida, guardar posición y detener la búsqueda."
        ],
        "solution": "datos = [15, 18, 22, 13, 27]\nobjetivo = 22\nposicion = -1\nfor i in range(len(datos)):\n    if datos[i] == objetivo:\n        posicion = i\n        break\nif posicion != -1:\n    print(\"Encontrado en indice\", posicion)\nelse:\n    print(\"No encontrado\")",
        "expected": "Encontrado en índice 2.",
        "starter": "datos = [15, 18, 22, 13, 27]\nprint(datos.index(22))",
        "check": {
          "type": "number",
          "question": "¿En qué índice está el valor 22?",
          "answer": 2
        }
      },
      {
        "title": "Ordenar sin modificar el original",
        "statement": "Dada una lista de mediciones, crear una nueva lista ordenada de menor a mayor sin alterar la original.",
        "reasoning": [
          "sorted(lista) devuelve una nueva lista.",
          "sort() modifica la lista existente.",
          "Comparar ambas listas."
        ],
        "solution": "original = [32, 18, 25, 40, 21]\nordenada = sorted(original)\nprint(\"Original:\", original)\nprint(\"Ordenada:\", ordenada)",
        "expected": "Original sigue [32, 18, 25, 40, 21]; ordenada es [18, 21, 25, 32, 40].",
        "starter": "original = [32, 18, 25, 40, 21]\nordenada = sorted(original)\nprint(ordenada)",
        "check": {
          "type": "number",
          "question": "¿Cuál es el primer valor de la lista ordenada?",
          "answer": 18
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Buscar sensor por código en una lista de registros.",
        "Búsqueda lineal sobre códigos."
      ],
      [
        "Eléctrica",
        "Ordenar mediciones de corriente de mayor a menor.",
        "sorted(datos, reverse=True)"
      ],
      [
        "Industrial",
        "Ordenar productos por stock.",
        "sorted(registros, key=...) como demostración opcional."
      ]
    ],
    "flow_steps": [
      "Recorrer la lista desde el inicio.",
      "Comparar cada elemento con el objetivo.",
      "Cuando coincida, guardar posición y detener la búsqueda."
    ],
    "parsons": {
      "title": "Ordena la solución de: Búsqueda lineal",
      "lines": [
        "datos = [15, 18, 22, 13, 27]",
        "objetivo = 22",
        "posicion = -1",
        "for i in range(len(datos)):",
        "    if datos[i] == objetivo:",
        "        posicion = i",
        "        break",
        "if posicion != -1:",
        "    print(\"Encontrado en indice\", posicion)",
        "else:"
      ]
    },
    "concepts": [
      {
        "term": "Búsqueda lineal",
        "definition": "Estrategia que revisa elementos uno por uno hasta encontrar el objetivo o terminar la colección."
      },
      {
        "term": "Ordenamiento",
        "definition": "Proceso de reorganizar elementos según un criterio."
      },
      {
        "term": "sorted()",
        "definition": "Función que devuelve una nueva lista ordenada sin modificar la original."
      },
      {
        "term": "Complejidad intuitiva",
        "definition": "Comparación de cuánto trabajo requiere un procedimiento al aumentar la cantidad de datos."
      }
    ],
    "study_tip": "Revisa los conceptos clave antes de resolver y comprueba tus resultados con al menos un caso sencillo.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español: listas y sorted()",
        "url": "https://docs.python.org/es/3/tutorial/datastructures.html",
        "note": "Repasa recorridos, ordenamiento y operaciones sobre listas."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Estrategia que revisa elementos uno por uno hasta encontrar el objetivo o terminar la colección.",
        "options": [
          "Búsqueda lineal",
          "sorted()",
          "Complejidad intuitiva",
          "Ordenamiento"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Proceso de reorganizar elementos según un criterio.",
        "options": [
          "Búsqueda lineal",
          "sorted()",
          "Ordenamiento",
          "Complejidad intuitiva"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Función que devuelve una nueva lista ordenada sin modificar la original.",
        "options": [
          "Ordenamiento",
          "Complejidad intuitiva",
          "Búsqueda lineal",
          "sorted()"
        ],
        "correct": 3
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Comparación de cuánto trabajo requiere un procedimiento al aumentar la cantidad de datos.",
        "options": [
          "sorted()",
          "Complejidad intuitiva",
          "Búsqueda lineal",
          "Ordenamiento"
        ],
        "correct": 1
      },
      {
        "category": "Ejercicio",
        "question": "Búsqueda lineal Buscar el valor 22 dentro de la lista [15, 18, 22, 13, 27] e indicar su posición. ¿En qué índice está el valor 22?",
        "options": [
          "1",
          "4",
          "2",
          "3"
        ],
        "correct": 2
      },
      {
        "category": "Ejercicio",
        "question": "Ordenar sin modificar el original Dada una lista de mediciones, crear una nueva lista ordenada de menor a mayor sin alterar la original. ¿Cuál es el primer valor de la lista ordenada?",
        "options": [
          "18",
          "36",
          "19",
          "9"
        ],
        "correct": 0
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Estrategia que revisa elementos uno por uno hasta encontrar el objetivo o terminar la colección.",
        "options": [
          "Búsqueda lineal",
          "Complejidad intuitiva",
          "Ordenamiento",
          "Algoritmo"
        ],
        "correct": 0
      }
    ]
  },
  {
    "week": 15,
    "title": "Errores, pruebas y depuración",
    "focus": "Errores sintácticos, de ejecución y lógicos; casos de prueba, trazas, debugger, validación y try/except.",
    "language": "Python",
    "exercises": [
      {
        "title": "Detectar tres tipos de error",
        "statement": "Analizar tres fragmentos y clasificar cada error: sintáctico, de ejecución o lógico.",
        "reasoning": [
          "Sintáctico: falta : en if x > 5.",
          "Ejecución: dividir por cero produce ZeroDivisionError.",
          "Lógico: promedio = a+b+c/3 aplica la división solo a c."
        ],
        "solution": "# A) Sintáctico: if x > 5   (falta :)\n# B) Ejecución: resultado = 10 / 0\n# C) Lógico: promedio = a + b + c / 3\n# Corrección C:\na, b, c = 6, 8, 10\npromedio = (a + b + c) / 3\nprint(promedio)",
        "expected": "A = sintáctico; B = ejecución; C = lógico. Corrección de C: (a+b+c)/3.",
        "starter": "a, b, c = 6, 8, 10\npromedio = (a + b + c) / 3\nprint(promedio)",
        "check": {
          "type": "text",
          "question": "Dividir 10/0 produce un error de... (EJECUCION, SINTACTICO o LOGICO)",
          "answer": "EJECUCION"
        }
      },
      {
        "title": "Validar entrada con try/except",
        "statement": "Solicitar un número real. Si el usuario ingresa texto no numérico, mostrar un mensaje y no detener abruptamente el programa.",
        "reasoning": [
          "Encerrar la conversión float() en try.",
          "Capturar ValueError.",
          "Mostrar mensaje controlado."
        ],
        "solution": "entrada = \"abc\"\ntry:\n    valor = float(entrada)\n    print(\"Valor valido:\", valor)\nexcept ValueError:\n    print(\"Error: debe ingresar un valor numerico\")",
        "expected": "Entrada 12.5 → se acepta; entrada abc → mensaje de error.",
        "starter": "entrada = \"abc\"\ntry:\n    print(float(entrada))\nexcept ValueError:\n    print(\"Error controlado\")",
        "check": {
          "type": "text",
          "question": "¿Qué excepción captura float('abc')?",
          "answer": "VALUEERROR"
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Probar temperatura justo en el límite.",
        "Casos: límite-0.1, límite, límite+0.1."
      ],
      [
        "Eléctrica",
        "Probar división V/I cuando I=0.",
        "Manejo de caso límite antes de dividir."
      ],
      [
        "Industrial",
        "Probar stock negativo.",
        "Validar dato antes de procesar."
      ]
    ],
    "flow_steps": [
      "Sintáctico: falta : en if x > 5.",
      "Ejecución: dividir por cero produce ZeroDivisionError.",
      "Lógico: promedio = a+b+c/3 aplica la división solo a c."
    ],
    "parsons": {
      "title": "Ordena la solución de: Detectar tres tipos de error",
      "lines": [
        "# A) Sintáctico: if x > 5   (falta :)",
        "# B) Ejecución: resultado = 10 / 0",
        "# C) Lógico: promedio = a + b + c / 3",
        "# Corrección C:",
        "a, b, c = 6, 8, 10",
        "promedio = (a + b + c) / 3",
        "print(promedio)"
      ]
    },
    "concepts": [
      {
        "term": "Error sintáctico",
        "definition": "Problema que impide interpretar el código porque no respeta la gramática del lenguaje."
      },
      {
        "term": "Excepción",
        "definition": "Evento detectado durante la ejecución que interrumpe el flujo normal si no se maneja."
      },
      {
        "term": "Error lógico",
        "definition": "El programa se ejecuta, pero produce un resultado incorrecto por un problema en la lógica."
      },
      {
        "term": "try/except",
        "definition": "Estructura de Python para manejar excepciones de manera controlada."
      }
    ],
    "study_tip": "Un programa correcto debe manejar también casos límite y entradas inválidas.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español: errores y excepciones",
        "url": "https://docs.python.org/es/3/tutorial/errors.html",
        "note": "Explica errores sintácticos, excepciones y try/except."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Problema que impide interpretar el código porque no respeta la gramática del lenguaje.",
        "options": [
          "Excepción",
          "Error lógico",
          "Error sintáctico",
          "try/except"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Evento detectado durante la ejecución que interrumpe el flujo normal si no se maneja.",
        "options": [
          "Error lógico",
          "Excepción",
          "Error sintáctico",
          "try/except"
        ],
        "correct": 1
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? El programa se ejecuta, pero produce un resultado incorrecto por un problema en la lógica.",
        "options": [
          "Error lógico",
          "Error sintáctico",
          "Excepción",
          "try/except"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Estructura de Python para manejar excepciones de manera controlada.",
        "options": [
          "Excepción",
          "Error lógico",
          "try/except",
          "Error sintáctico"
        ],
        "correct": 2
      },
      {
        "category": "Ejercicio",
        "question": "Detectar tres tipos de error Analizar tres fragmentos y clasificar cada error: sintáctico, de ejecución o lógico. Dividir 10/0 produce un error de... (EJECUCION, SINTACTICO o LOGICO)",
        "options": [
          "Excepción",
          "EJECUCION",
          "Verdadero",
          "try/except"
        ],
        "correct": 1
      },
      {
        "category": "Ejercicio",
        "question": "Validar entrada con try/except Solicitar un número real. Si el usuario ingresa texto no numérico, mostrar un mensaje y no detener abruptamente el programa. ¿Qué excepción captura float('abc')?",
        "options": [
          "try/except",
          "VALUEERROR",
          "Verdadero",
          "Excepción"
        ],
        "correct": 1
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Problema que impide interpretar el código porque no respeta la gramática del lenguaje.",
        "options": [
          "try/except",
          "Excepción",
          "Error sintáctico",
          "Error lógico"
        ],
        "correct": 2
      }
    ]
  },
  {
    "week": 16,
    "title": "Procesamiento y visualización de datos de ingeniería",
    "focus": "Bibliotecas math/statistics, indicadores sencillos y gráfica básica con Matplotlib.",
    "language": "Python",
    "exercises": [
      {
        "title": "Estadísticos descriptivos",
        "statement": "Calcular media, mediana y desviación estándar de una lista de mediciones utilizando statistics.",
        "reasoning": [
          "Importar statistics.",
          "Usar mean(), median() y stdev().",
          "Interpretar: media = centro; mediana = valor central; desviación = dispersión."
        ],
        "solution": "import statistics\ndatos = [10, 12, 11, 15, 9, 13, 10]\nprint(\"Media:\", statistics.mean(datos))\nprint(\"Mediana:\", statistics.median(datos))\nprint(\"Desviacion estandar:\", statistics.stdev(datos))",
        "expected": "Media ≈ 11.43; mediana = 11; desviación estándar ≈ 2.07.",
        "starter": "import statistics\ndatos = [10, 12, 11, 15, 9, 13, 10]\nprint(statistics.mean(datos))\nprint(statistics.median(datos))",
        "check": {
          "type": "number",
          "question": "¿Cuál es la mediana?",
          "answer": 11
        }
      },
      {
        "title": "Gráfica de una serie temporal",
        "statement": "Representar seis mediciones tomadas en momentos consecutivos.",
        "reasoning": [
          "Importar matplotlib.pyplot como plt.",
          "Definir eje x (tiempo) y eje y (mediciones).",
          "Usar plot() con marcadores.",
          "Agregar título y etiquetas."
        ],
        "solution": "import matplotlib.pyplot as plt\ntiempo = [1, 2, 3, 4, 5, 6]\nmediciones = [20, 23, 21, 25, 27, 24]\nplt.plot(tiempo, mediciones, marker=\"o\")\nplt.title(\"Mediciones en el tiempo\")\nplt.xlabel(\"Periodo\")\nplt.ylabel(\"Valor\")\nplt.grid(True)\nplt.show()",
        "expected": "Una línea con seis puntos. Identificar tendencia, máximo y cambios bruscos.",
        "starter": "tiempo = [1,2,3,4,5,6]\nmediciones = [20,23,21,25,27,24]\nprint(\"Maximo:\", max(mediciones))",
        "check": {
          "type": "number",
          "question": "¿Cuál es el valor máximo de la serie?",
          "answer": 27
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "Gráfica temperatura vs. tiempo.",
        "Línea temporal."
      ],
      [
        "Eléctrica",
        "Gráfica voltaje vs. hora.",
        "Línea; revisar valores fuera de rango."
      ],
      [
        "Industrial",
        "Gráfica producción vs. día.",
        "Línea o barras; comparar cumplimiento de meta."
      ]
    ],
    "flow_steps": [
      "Importar statistics.",
      "Usar mean(), median() y stdev().",
      "Interpretar: media = centro; mediana = valor central; desviación = dispersión."
    ],
    "parsons": {
      "title": "Ordena la solución de: Estadísticos descriptivos",
      "lines": [
        "import statistics",
        "datos = [10, 12, 11, 15, 9, 13, 10]",
        "print(\"Media:\", statistics.mean(datos))",
        "print(\"Mediana:\", statistics.median(datos))",
        "print(\"Desviacion estandar:\", statistics.stdev(datos))"
      ]
    },
    "concepts": [
      {
        "term": "Media",
        "definition": "Promedio aritmético de un conjunto de valores."
      },
      {
        "term": "Mediana",
        "definition": "Valor central de los datos una vez ordenados."
      },
      {
        "term": "Desviación estándar",
        "definition": "Medida de dispersión que indica cuánto tienden a alejarse los datos de su media."
      },
      {
        "term": "Visualización de datos",
        "definition": "Representación gráfica que facilita identificar patrones, tendencias y valores atípicos."
      }
    ],
    "study_tip": "Una gráfica debe tener título, ejes identificados y una interpretación.",
    "references": [
      {
        "title": "Python — Biblioteca estándar: statistics",
        "url": "https://docs.python.org/es/3/library/statistics.html",
        "note": "Consulta mean(), median() y stdev()."
      },
      {
        "title": "Matplotlib — Pyplot tutorial",
        "url": "https://matplotlib.org/stable/tutorials/pyplot.html",
        "note": "Guía introductoria para crear y rotular gráficas sencillas."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Promedio aritmético de un conjunto de valores.",
        "options": [
          "Desviación estándar",
          "Visualización de datos",
          "Mediana",
          "Media"
        ],
        "correct": 3
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Valor central de los datos una vez ordenados.",
        "options": [
          "Mediana",
          "Desviación estándar",
          "Media",
          "Visualización de datos"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Medida de dispersión que indica cuánto tienden a alejarse los datos de su media.",
        "options": [
          "Desviación estándar",
          "Media",
          "Visualización de datos",
          "Mediana"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Representación gráfica que facilita identificar patrones, tendencias y valores atípicos.",
        "options": [
          "Media",
          "Desviación estándar",
          "Mediana",
          "Visualización de datos"
        ],
        "correct": 3
      },
      {
        "category": "Ejercicio",
        "question": "Estadísticos descriptivos Calcular media, mediana y desviación estándar de una lista de mediciones utilizando statistics. ¿Cuál es la mediana?",
        "options": [
          "5.5",
          "22",
          "11",
          "12"
        ],
        "correct": 2
      },
      {
        "category": "Ejercicio",
        "question": "Gráfica de una serie temporal Representar seis mediciones tomadas en momentos consecutivos. ¿Cuál es el valor máximo de la serie?",
        "options": [
          "28",
          "54",
          "27",
          "13.5"
        ],
        "correct": 2
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Promedio aritmético de un conjunto de valores.",
        "options": [
          "Salida",
          "Media",
          "Entrada",
          "Mediana"
        ],
        "correct": 1
      }
    ]
  },
  {
    "week": 17,
    "title": "Integración aplicada a ingeniería",
    "focus": "Estructuras de datos, funciones, archivos, búsqueda, validación, pruebas y presentación de resultados.",
    "language": "Python",
    "exercises": [
      {
        "title": "Mini sistema de procesamiento de mediciones",
        "statement": "A partir de un archivo CSV con codigo,valor, leer los registros, calcular promedio, máximo y mínimo, contar valores que superan un límite y mostrar el código asociado al máximo.",
        "reasoning": [
          "Crear función cargar_datos().",
          "Leer CSV y almacenar registros como diccionarios.",
          "Crear función resumen() para calcular indicadores.",
          "Recorrer registros para máximo y alertas.",
          "Probar con datos normales y un valor extremo."
        ],
        "solution": "registros = [\n    {\"codigo\":\"S1\",\"valor\":42.0},\n    {\"codigo\":\"S2\",\"valor\":61.0},\n    {\"codigo\":\"S3\",\"valor\":55.0}\n]\ndef resumen(registros, limite):\n    valores = [r[\"valor\"] for r in registros]\n    max_registro = max(registros, key=lambda r: r[\"valor\"])\n    alertas = sum(1 for r in registros if r[\"valor\"] > limite)\n    return {\n        \"promedio\": sum(valores) / len(valores),\n        \"maximo\": max(valores),\n        \"minimo\": min(valores),\n        \"codigo_max\": max_registro[\"codigo\"],\n        \"alertas\": alertas\n    }\nprint(resumen(registros, 50))",
        "expected": "El diccionario final resume los principales indicadores y sirve como base para la presentación del PAE 2.",
        "starter": "registros = [{\"codigo\":\"S1\",\"valor\":42},{\"codigo\":\"S2\",\"valor\":61},{\"codigo\":\"S3\",\"valor\":55}]\nprint(max(registros, key=lambda r: r[\"valor\"]))",
        "check": {
          "type": "text",
          "question": "Con los datos de ejemplo, ¿qué código tiene el máximo?",
          "answer": "S2"
        }
      },
      {
        "title": "Plan mínimo de pruebas",
        "statement": "Diseñar casos de prueba para el programa anterior antes de entregarlo.",
        "reasoning": [
          "Caso normal: varios valores dentro del rango.",
          "Caso límite: un valor exactamente igual al límite.",
          "Caso de alerta: uno o más valores por encima.",
          "Caso de formato: valor no numérico en CSV.",
          "Caso de archivo vacío."
        ],
        "solution": "casos = [\n    \"normal\",\n    \"valor exactamente igual al limite\",\n    \"uno o mas valores por encima\",\n    \"valor no numerico en CSV\",\n    \"archivo vacio\"\n]\nfor caso in casos:\n    print(\"-\", caso)",
        "expected": "El estudiante debe demostrar que no solo «corre» el programa, sino que ha pensado qué situaciones pueden hacerlo fallar.",
        "starter": "casos = [\"normal\", \"limite\", \"alerta\", \"formato\", \"archivo vacio\"]\nprint(\"Casos de prueba:\", len(casos))",
        "check": {
          "type": "number",
          "question": "¿Cuántos casos mínimos de prueba se proponen?",
          "answer": 5
        }
      }
    ],
    "careers": [
      [
        "Mecatrónica",
        "CSV de sensores; detectar temperatura máxima y alertas.",
        "Producto contextualizado del Taller 2."
      ],
      [
        "Eléctrica",
        "CSV de circuitos; calcular potencia y detectar sobrecarga.",
        "Agregar función potencia = V×I."
      ],
      [
        "Industrial",
        "CSV de producción; detectar línea con mayor producción y días bajo meta.",
        "Aplicar filtros y resumen."
      ]
    ],
    "flow_steps": [
      "Crear función cargar_datos().",
      "Leer CSV y almacenar registros como diccionarios.",
      "Crear función resumen() para calcular indicadores.",
      "Recorrer registros para máximo y alertas.",
      "Probar con datos normales y un valor extremo."
    ],
    "parsons": {
      "title": "Ordena la solución de: Mini sistema de procesamiento de mediciones",
      "lines": [
        "registros = [",
        "    {\"codigo\":\"S1\",\"valor\":42.0},",
        "    {\"codigo\":\"S2\",\"valor\":61.0},",
        "    {\"codigo\":\"S3\",\"valor\":55.0}",
        "]",
        "def resumen(registros, limite):",
        "    valores = [r[\"valor\"] for r in registros]",
        "    max_registro = max(registros, key=lambda r: r[\"valor\"])",
        "    alertas = sum(1 for r in registros if r[\"valor\"] > limite)",
        "    return {"
      ]
    },
    "concepts": [
      {
        "term": "Integración",
        "definition": "Combinación de varias técnicas de programación para resolver un problema completo."
      },
      {
        "term": "Registro",
        "definition": "Conjunto de campos relacionados que describen una entidad o medición."
      },
      {
        "term": "Validación",
        "definition": "Comprobación de que los datos cumplen condiciones antes de procesarlos."
      },
      {
        "term": "Prueba de límite",
        "definition": "Caso de prueba construido alrededor de valores exactamente en un umbral o muy cerca de él."
      }
    ],
    "study_tip": "Divide la solución final en funciones y define casos de prueba antes de darla por terminada.",
    "references": [
      {
        "title": "Python — Tutorial oficial en español",
        "url": "https://docs.python.org/es/3/tutorial/",
        "note": "Referencia de repaso para integrar funciones, estructuras de datos, archivos y manejo de errores."
      },
      {
        "title": "Python — Biblioteca estándar: csv",
        "url": "https://docs.python.org/es/3/library/csv.html",
        "note": "Apoyo para el procesamiento de archivos CSV del proyecto integrador."
      }
    ],
    "exam_bank": [
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Combinación de varias técnicas de programación para resolver un problema completo.",
        "options": [
          "Registro",
          "Validación",
          "Integración",
          "Prueba de límite"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Conjunto de campos relacionados que describen una entidad o medición.",
        "options": [
          "Registro",
          "Integración",
          "Validación",
          "Prueba de límite"
        ],
        "correct": 0
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Comprobación de que los datos cumplen condiciones antes de procesarlos.",
        "options": [
          "Registro",
          "Integración",
          "Validación",
          "Prueba de límite"
        ],
        "correct": 2
      },
      {
        "category": "Definición",
        "question": "¿Qué concepto corresponde a esta definición? Caso de prueba construido alrededor de valores exactamente en un umbral o muy cerca de él.",
        "options": [
          "Validación",
          "Prueba de límite",
          "Integración",
          "Registro"
        ],
        "correct": 1
      },
      {
        "category": "Ejercicio",
        "question": "Mini sistema de procesamiento de mediciones A partir de un archivo CSV con codigo,valor, leer los registros, calcular promedio, máximo y mínimo, contar valores que superan un límite y mostrar el código asociado al máximo. Con los datos de ejemplo, ¿qué código tiene el máximo?",
        "options": [
          "Salida",
          "S2",
          "Falso",
          "Ninguna"
        ],
        "correct": 1
      },
      {
        "category": "Ejercicio",
        "question": "Plan mínimo de pruebas Diseñar casos de prueba para el programa anterior antes de entregarlo. ¿Cuántos casos mínimos de prueba se proponen?",
        "options": [
          "5",
          "10",
          "2.5",
          "6"
        ],
        "correct": 0
      },
      {
        "category": "Comprensión",
        "question": "Selecciona el concepto relacionado con esta idea: Combinación de varias técnicas de programación para resolver un problema completo.",
        "options": [
          "Validación",
          "Integración",
          "Algoritmo",
          "Registro"
        ],
        "correct": 1
      }
    ]
  }
];
