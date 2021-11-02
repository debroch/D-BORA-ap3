var quiztitle = "Teste seu conhecimento sobre Covid-19";

var quiz = [{
        "question": "Como o COVID-19 é transmitido??",
        "image": "https://vejario.abril.com.br/wp-content/uploads/2020/12/coronavirus-4952102_1920.jpg",
        "choices": [
            "Através de Gotículas de saliva",
            "Bebendo água impura",
            "Cobrindo o nariz",
            "Tudo acima",
        ],
        "correct": "Através de Gotículas de saliva",
    },
    {
        "question": "Quais são os sintomas comuns de COVID-19?",
        "image": "https://i.em.com.br/DWRYO8rG6tp0cciL-i7BayQipng=/620x372/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/06/14/1276613/20210614155637767844a.png",
        "choices": [
            "Tosse sem para",
            "Febre",
            "Cansaço",
            "Perda de paladar",
            "Diarreia",
            "Tudo acima",
        ],
        "correct": "Tudo acima",
    },
    {
        "question": "Como se previnir da COVID-19?",
        "image": "https://www.correiodopovo.com.br/image/policy:1.545080:1609265206/.jpg?f=2x1&$p$f=7d891a5&w=720&$w=3b33d2d",
        "choices": [
            "Usar máscara, lavar as mãos e evitar aglomerações",
            "Lavar as mãos e evitar aglomeração",
            "Só a máscara é o suficiente",
        ],
        "correct": "Usar máscara, lavar as mãos e evitar aglomerações",
    },
    {
        "question": "Quem é o grupo de risco do COVID-19?",
        "image": "http://previva.com.br/novosite/wp-content/uploads/2014/04/gruposderiscoesse.png",
        "choices": [
            "Crianças",
            "Pessoas com condições de saúde precária, principalmente idosos",
            "Atletas",
            "Pessoas com sangue tipo A ",
        ],
        "correct": "Pessoas com condições de saúde precária, principalmente idosos",


    },
    {
        "question": "Por que os homens sofrem mais com o COVID-19?",
        "image": "https://www.ufsm.br/app/uploads/sites/601/2020/06/Capa2-1024x668.jpg",
        "choices": [
            "Uma questão orgânica, o vírus deixa o corpo masculino mais sensível",
            "Uma questão comportamental, os homens se cuidam menos",
            "Nenhuma acima",
        ],
        "correct": "Uma questão comportamental, os homens se cuidam menos",
    },
    {
        "question": "Por quanto tempo uma pessoa infectada transmite o COVID-19?",
        "image": "https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/03/isolamento.jpg",
        "choices": [
            "A pessoa infectada não transmite",
            "10 a 15 dias depois do surgiemnto dos sintomas",
            "7 a 10 dias depois do surgimento dos sintomas",
            "A pessoa pode transmite ate 80 dias",
        ],
        "correct": "7 a 10 dias depois do surgimento dos sintomas",
    },
    {
        "question": "A partir de qual temperatura, pode se considerar que a pessoa esta infectada ?",
        "image": "https://lh3.googleusercontent.com/proxy/JhfZ5dHAS__cSyrC1ZZ0QhO6Y4N42Z5hqlL-Yox7HFh6k0GacGuQ9etn34dKUtPZyRiOintcxbyf8IS5IwtnJ4kDgI9hNK1o7JmBAXmwdtlG2jd6fJi2seyb6heIQZUmcSV9mJlqS0U7ckk",
        "choices": [
            "36 ° C",
            "33 ° C",
            "38 ° C",
        ],
        "correct": "38 ° C",
    },
    {
        "question": "Aonde a epidemia começou?",
        "image": "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2019/05/quiz-bandeiras.jpg",
        "choices": [
            "China",
            "Estados Unidos",
            "Rússia",
            "Alemanha",
            "Brasil",
        ],
        "correct": "China",
    },
    {
        "question": "COVID só foi identificado em 2019?",
        "image": "https://www.gncnews.com.br/assets/uploads/b8ee57a385d5c8bb86a7b20a96bbc7c8.jpg",
        "choices": [
            "Sim, so foi detectado em 2019",
            "Não, foi identificado pela primeira vez em 1964",
            "Não, foi identificado pela primeira vez em 2003",
            "Tudo acima",
        ],
        "correct": "Não, foi identificado pela primeira vez em 1964",
    },
    {
        "question": "A vacina CoronaVac é 100% eficaz ?",
        "image": "https://projetocolabora.com.br/wp-content/uploads/2020/12/20201214afp067-361450.jpg",
        "choices": [
            "Não, tem uma eficácia geral de 50,38%",
            "Não, a vacina não ajuda em nada",
            "Sim, todas as vacinas são 100% eficaz",
        ],
        "correct": "Não, tem uma eficácia geral de 50,38%",
    },
];

/******* No need to edit below this line *********/
var currentquestion = 0,
    score = 0,
    submt = true,
    picked;
jQuery(document).ready(function(e) {
    function h(i) { return e(document.createElement("div")).text(i).html() }

    function b(k) { if (typeof k !== "undefined" && e.type(k) == "array") { e("#choice-block").empty(); for (var j = 0; j < k.length; j++) { e(document.createElement("li")).addClass("choice choice-box").attr("data-index", j).text(k[j]).appendTo("#choice-block") } } }

    function d() {
        submt = true;
        e("#explanation").empty();
        e("#question").text(quiz[currentquestion]["question"]);
        e("#pager").text("Questão " + Number(currentquestion + 1) + " de " + quiz.length);
        if (quiz[currentquestion].hasOwnProperty("image") && quiz[currentquestion]["image"] != "") { if (e("#question-image").length == 0) { e(document.createElement("img")).addClass("question-image").attr("id", "question-image").attr("src", quiz[currentquestion]["image"]).attr("alt", h(quiz[currentquestion]["question"])).insertAfter("#question") } else { e("#question-image").attr("src", quiz[currentquestion]["image"]).attr("alt", h(quiz[currentquestion]["question"])) } } else { e("#question-image").remove() }
        b(quiz[currentquestion]["choices"]);
        c()
    }

    function f(i) {
        if (quiz[currentquestion]["choices"][i] == quiz[currentquestion]["correct"]) {
            e(".choice").eq(i).css({ "background-color": "#50D943" });
            e("#explanation").html("<strong>Correto!</strong> " + h(quiz[currentquestion]["explanation"]));
            score++
        } else {
            e(".choice").eq(i).css({ "background-color": "#D92623" });
            e("#explanation").html("<strong>Incorreto!</strong> " + h(quiz[currentquestion]["explanation"]))
        }
        currentquestion++;
        e("#submitbutton").html("PRÓXIMA QUESTÃO &raquo;").on("click", function() {
            if (currentquestion == quiz.length) { a() } else {
                e(this).text("Verifique a resposta").css({ color: "#222" }).off("click");
                d()
            }
        })
    }

    function c() {
        e(".choice").on("mouseover", function() { e(this).css({ "background-color": "#e1e1e1" }) });
        e(".choice").on("mouseout", function() { e(this).css({ "background-color": "#fff" }) });
        e(".choice").on("click", function() {
            picked = e(this).attr("data-index");
            e(".choice").removeAttr("style").off("mouseout mouseover");
            e(this).css({ "border-color": "#222", "font-weight": 700, "background-color": "#c1c1c1" });
            if (submt) {
                submt = false;
                e("#submitbutton").css({ color: "#000" }).on("click", function() {
                    e(".choice").off("click");
                    e(this).off("click");
                    f(picked)
                })
            }
        })
    }

    function a() {
        e("#explanation").empty();
        e("#question").empty();
        e("#choice-block").empty();
        e("#submitbutton").remove();
        e("#question").text("você acertou " + score + " de " + quiz.length + " Questões.");
        e(document.createElement("h2")).css({ "text-align": "center", "font-size": "4em" }).text(Math.round(score / quiz.length * 100) + "%").insertAfter("#question")
    }

    function g() {
        if (typeof quiztitle !== "undefined" && e.type(quiztitle) === "string") { e(document.createElement("h1")).text(quiztitle).appendTo("#frame") } else { e(document.createElement("h1")).text("Quiz").appendTo("#frame") }
        if (typeof quiz !== "undefined" && e.type(quiz) === "array") {
            e(document.createElement("p")).addClass("pager").attr("id", "pager").text("Questão 1 of " + quiz.length).appendTo("#frame");
            e(document.createElement("h2")).addClass("question").attr("id", "question").text(quiz[0]["question"]).appendTo("#frame");
            if (quiz[0].hasOwnProperty("image") && quiz[0]["image"] != "") { e(document.createElement("img")).addClass("question-image").attr("id", "question-image").attr("src", quiz[0]["image"]).attr("alt", h(quiz[0]["question"])).appendTo("#frame") }
            e(document.createElement("p")).addClass("explanation").attr("id", "explanation").html("&nbsp;").appendTo("#frame");
            e(document.createElement("ul")).attr("id", "choice-block").appendTo("#frame");
            b(quiz[0]["choices"]);
            e(document.createElement("div")).addClass("choice-box").attr("id", "submitbutton").text("Verifique a resposta").css({ "font-weight": 700, color: "#222", padding: "30px 0" }).appendTo("#frame");
            c()
        }
    }
    g()
});
