<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-08-blue?style=flat-square)

# `Colecciones`

</div>

---

### 📋 Contenido

| Tipo | Descripción |
|:-----|:------------|
| `ArrayList` | Lista dinámica |
| `HashMap` | Pares clave-valor |
| `HashSet` | Elementos únicos |
| Generics | Tipos parametrizados |

---

### 💻 Código Clave

```java
// ArrayList
List<String> nombres = new ArrayList<>();
nombres.add("Juan");
nombres.add("María");
for (String n : nombres) {
    System.out.println(n);
}

// HashMap
Map<String, Integer> edades = new HashMap<>();
edades.put("Juan", 20);
edades.put("María", 25);
int edad = edades.get("Juan");  // 20

// HashSet
Set<String> unicos = new HashSet<>();
unicos.add("A");
unicos.add("A");  // No se agrega
// unicos.size() = 1
```

---

<div align="center">
<sub>Programación OO I · Experiencia 3</sub>
</div>
