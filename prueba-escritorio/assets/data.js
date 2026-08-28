
window.PAPEL_EXERCISES = [
  {
    id:"v1",
    topic:"Variables",
    level:1,
    title:"Actualización de una variable",
    objective:"Seguir cómo cambia una variable después de varias asignaciones.",
    code:`x = 4
x = x + 3
x = x * 2
print(x)`,
    columns:["Paso","Instrucción","x"],
    rows:[
      ["1","x = 4","4"],
      ["2","x = x + 3","7"],
      ["3","x = x * 2","14"]
    ],
    output:"14",
    hint:"Empieza con x = 4. Cada nueva asignación reemplaza el valor anterior."
  },
  {
    id:"v2",
    topic:"Variables",
    level:1,
    title:"Dos variables",
    objective:"Observar cómo una variable puede depender del valor de otra.",
    code:`a = 5
b = 2
a = a + b
b = a - 1
print(a, b)`,
    columns:["Paso","Instrucción","a","b"],
    rows:[
      ["1","a = 5","5","-"],
      ["2","b = 2","5","2"],
      ["3","a = a + b","7","2"],
      ["4","b = a - 1","7","6"]
    ],
    output:"7 6",
    hint:"Cuando cambia a, b conserva su valor hasta que una instrucción lo modifica."
  },
  {
    id:"v3",
    topic:"Variables",
    level:1,
    title:"Intercambio con variable auxiliar",
    objective:"Comprender el intercambio de valores usando una variable temporal.",
    code:`a = 3
b = 8
temp = a
a = b
b = temp
print(a, b)`,
    columns:["Paso","Instrucción","a","b","temp"],
    rows:[
      ["1","a = 3","3","-","-"],
      ["2","b = 8","3","8","-"],
      ["3","temp = a","3","8","3"],
      ["4","a = b","8","8","3"],
      ["5","b = temp","8","3","3"]
    ],
    output:"8 3",
    hint:"temp guarda el valor original de a antes de que a cambie."
  },

  {
    id:"i1",
    topic:"Condicionales",
    level:2,
    title:"Decisión simple",
    objective:"Seguir una condición y determinar qué rama se ejecuta.",
    code:`temperatura = 35

if temperatura > 30:
    estado = "ALTA"
else:
    estado = "NORMAL"

print(estado)`,
    columns:["Paso","temperatura","Condición temperatura > 30","estado"],
    rows:[
      ["1","35","-","-"],
      ["2","35","Verdadero","ALTA"]
    ],
    output:"ALTA",
    hint:"35 > 30 es verdadero, por lo que se ejecuta la primera rama."
  },
  {
    id:"i2",
    topic:"Condicionales",
    level:2,
    title:"Par o impar",
    objective:"Interpretar el operador módulo dentro de una decisión.",
    code:`n = 7

if n % 2 == 0:
    tipo = "PAR"
else:
    tipo = "IMPAR"

print(tipo)`,
    columns:["Paso","n","n % 2","Condición","tipo"],
    rows:[
      ["1","7","-","-","-"],
      ["2","7","1","Falso","IMPAR"]
    ],
    output:"IMPAR",
    hint:"El residuo de 7 / 2 es 1. Por eso 7 % 2 == 0 es falso."
  },
  {
    id:"i3",
    topic:"Condicionales",
    level:2,
    title:"Tres alternativas",
    objective:"Rastrear una cadena if/elif/else.",
    code:`voltaje = 218

if voltaje < 210:
    estado = "BAJO"
elif voltaje <= 230:
    estado = "NORMAL"
else:
    estado = "ALTO"

print(estado)`,
    columns:["Paso","voltaje","voltaje < 210","voltaje <= 230","estado"],
    rows:[
      ["1","218","-","-","-"],
      ["2","218","Falso","Verdadero","NORMAL"]
    ],
    output:"NORMAL",
    hint:"Al fallar el primer if, Python evalúa el elif."
  },

  {
    id:"f1",
    topic:"Ciclo for",
    level:3,
    title:"Acumulador básico",
    objective:"Seguir un ciclo for y observar cómo cambia un acumulador.",
    code:`suma = 0

for i in range(1, 4):
    suma = suma + i

print(suma)`,
    columns:["Iteración","i","suma antes","Operación","suma después"],
    rows:[
      ["1","1","0","0 + 1","1"],
      ["2","2","1","1 + 2","3"],
      ["3","3","3","3 + 3","6"]
    ],
    output:"6",
    hint:"range(1, 4) genera 1, 2 y 3. El 4 no se incluye."
  },
  {
    id:"f2",
    topic:"Ciclo for",
    level:3,
    title:"Recorrido con salto",
    objective:"Interpretar range con un incremento diferente de 1.",
    code:`total = 0

for i in range(2, 7, 2):
    total = total + i

print(total)`,
    columns:["Iteración","i","total antes","Operación","total después"],
    rows:[
      ["1","2","0","0 + 2","2"],
      ["2","4","2","2 + 4","6"],
      ["3","6","6","6 + 6","12"]
    ],
    output:"12",
    hint:"range(2, 7, 2) genera 2, 4 y 6."
  },
  {
    id:"f3",
    topic:"Ciclo for",
    level:3,
    title:"Producto acumulado",
    objective:"Reconocer un acumulador multiplicativo.",
    code:`producto = 1

for i in range(1, 5):
    producto = producto * i

print(producto)`,
    columns:["Iteración","i","producto antes","Operación","producto después"],
    rows:[
      ["1","1","1","1 × 1","1"],
      ["2","2","1","1 × 2","2"],
      ["3","3","2","2 × 3","6"],
      ["4","4","6","6 × 4","24"]
    ],
    output:"24",
    hint:"Para multiplicar acumulativamente se inicia en 1, no en 0."
  },

  {
    id:"w1",
    topic:"Ciclo while",
    level:4,
    title:"Contador ascendente",
    objective:"Seguir un while y verificar cuándo deja de repetirse.",
    code:`i = 1
suma = 0

while i <= 3:
    suma = suma + i
    i = i + 1

print(suma)`,
    columns:["Iteración","i antes","Condición i <= 3","suma después","i después"],
    rows:[
      ["1","1","Verdadero","1","2"],
      ["2","2","Verdadero","3","3"],
      ["3","3","Verdadero","6","4"],
      ["Salida","4","Falso","6","4"]
    ],
    output:"6",
    hint:"El ciclo termina cuando i vale 4 porque 4 <= 3 es falso."
  },
  {
    id:"w2",
    topic:"Ciclo while",
    level:4,
    title:"Reducción progresiva",
    objective:"Rastrear un contador que disminuye.",
    code:`n = 8

while n > 1:
    n = n // 2

print(n)`,
    columns:["Iteración","n antes","Condición n > 1","n después"],
    rows:[
      ["1","8","Verdadero","4"],
      ["2","4","Verdadero","2"],
      ["3","2","Verdadero","1"],
      ["Salida","1","Falso","1"]
    ],
    output:"1",
    hint:"// es división entera. 8 // 2 = 4, luego 4 // 2 = 2."
  },
  {
    id:"w3",
    topic:"Ciclo while",
    level:4,
    title:"Duplicación hasta un límite",
    objective:"Comprender un while donde la variable cambia multiplicándose.",
    code:`valor = 3
pasos = 0

while valor < 20:
    valor = valor * 2
    pasos = pasos + 1

print(valor, pasos)`,
    columns:["Iteración","valor antes","valor después","pasos"],
    rows:[
      ["1","3","6","1"],
      ["2","6","12","2"],
      ["3","12","24","3"],
      ["Salida","24","24","3"]
    ],
    output:"24 3",
    hint:"Después de llegar a 24, la condición valor < 20 deja de cumplirse."
  },

  {
    id:"a1",
    topic:"Contadores y acumuladores",
    level:5,
    title:"Contar mediciones válidas",
    objective:"Distinguir entre recorrer datos y contar solo los que cumplen una condición.",
    code:`mediciones = [12, 8, 15, 5]
contador = 0

for x in mediciones:
    if x >= 10:
        contador = contador + 1

print(contador)`,
    columns:["Iteración","x","x >= 10","contador antes","contador después"],
    rows:[
      ["1","12","Verdadero","0","1"],
      ["2","8","Falso","1","1"],
      ["3","15","Verdadero","1","2"],
      ["4","5","Falso","2","2"]
    ],
    output:"2",
    hint:"El contador solo aumenta cuando x es mayor o igual que 10."
  },
  {
    id:"a2",
    topic:"Contadores y acumuladores",
    level:5,
    title:"Suma condicional",
    objective:"Acumular únicamente los valores que cumplen una condición.",
    code:`datos = [4, 7, 2, 9]
suma = 0

for x in datos:
    if x % 2 != 0:
        suma = suma + x

print(suma)`,
    columns:["Iteración","x","¿Impar?","suma antes","suma después"],
    rows:[
      ["1","4","No","0","0"],
      ["2","7","Sí","0","7"],
      ["3","2","No","7","7"],
      ["4","9","Sí","7","16"]
    ],
    output:"16",
    hint:"Solo 7 y 9 son impares."
  },
  {
    id:"a3",
    topic:"Contadores y acumuladores",
    level:5,
    title:"Promedio a partir de suma y contador",
    objective:"Seguir simultáneamente un acumulador y un contador.",
    code:`datos = [10, 20, 30]
suma = 0
contador = 0

for x in datos:
    suma = suma + x
    contador = contador + 1

promedio = suma / contador
print(promedio)`,
    columns:["Iteración","x","suma","contador"],
    rows:[
      ["1","10","10","1"],
      ["2","20","30","2"],
      ["3","30","60","3"]
    ],
    output:"20.0",
    hint:"Al terminar: suma = 60 y contador = 3; 60 / 3 = 20.0."
  },

  {
    id:"l1",
    topic:"Listas",
    level:6,
    title:"Recorrer una lista",
    objective:"Relacionar cada iteración con el elemento actual de una lista.",
    code:`temperaturas = [18, 21, 25]
suma = 0

for t in temperaturas:
    suma = suma + t

print(suma)`,
    columns:["Iteración","t","suma antes","suma después"],
    rows:[
      ["1","18","0","18"],
      ["2","21","18","39"],
      ["3","25","39","64"]
    ],
    output:"64",
    hint:"t toma, en orden, los valores 18, 21 y 25."
  },
  {
    id:"l2",
    topic:"Listas",
    level:6,
    title:"Buscar el máximo",
    objective:"Seguir una comparación que actualiza el mayor valor encontrado.",
    code:`datos = [6, 3, 9, 4]
mayor = datos[0]

for x in datos:
    if x > mayor:
        mayor = x

print(mayor)`,
    columns:["Iteración","x","mayor antes","x > mayor","mayor después"],
    rows:[
      ["1","6","6","Falso","6"],
      ["2","3","6","Falso","6"],
      ["3","9","6","Verdadero","9"],
      ["4","4","9","Falso","9"]
    ],
    output:"9",
    hint:"mayor comienza con el primer elemento de la lista."
  },
  {
    id:"l3",
    topic:"Listas",
    level:6,
    title:"Modificar elementos por índice",
    objective:"Entender cómo cambian los elementos de una lista.",
    code:`valores = [2, 4, 6]

for i in range(len(valores)):
    valores[i] = valores[i] + 1

print(valores)`,
    columns:["Iteración","i","valor antes","valor después","lista"],
    rows:[
      ["1","0","2","3","[3, 4, 6]"],
      ["2","1","4","5","[3, 5, 6]"],
      ["3","2","6","7","[3, 5, 7]"]
    ],
    output:"[3, 5, 7]",
    hint:"i recorre 0, 1 y 2 porque len(valores) es 3."
  }
];

window.PAPEL_TOPICS = [
  {name:"Variables", icon:"🔢", subtitle:"Asignaciones y cambios de estado"},
  {name:"Condicionales", icon:"🔀", subtitle:"Decisiones if / elif / else"},
  {name:"Ciclo for", icon:"🔁", subtitle:"Iteraciones conocidas"},
  {name:"Ciclo while", icon:"♻️", subtitle:"Repetición por condición"},
  {name:"Contadores y acumuladores", icon:"🧮", subtitle:"Patrones fundamentales"},
  {name:"Listas", icon:"📚", subtitle:"Recorridos y actualización"}
];
