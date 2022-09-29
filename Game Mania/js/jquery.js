/*!
 * Biblioteca JavaScript jQuery v3.6.1
 *https://jquery.com/
 *
 * Inclui Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation e outros contribuidores
 * Lançado sob a licença MIT
 * https://jquery.org/license
 *
 * Data: 26/08/2022T17:52Z
 */
 (função(global, fábrica) {

	"usar estrito";

	if ( tipo de módulo === "objeto" && tipo de módulo.exports === "objeto" ) {

		// Para ambientes do tipo CommonJS e CommonJS onde uma `janela` adequada
		// está presente, execute a fábrica e obtenha jQuery.
		// Para ambientes que não possuem uma `janela` com um `document`
		// (como Node.js), exponha uma fábrica como module.exports.
		// Isso acentua a necessidade da criação de uma verdadeira `janela`.
		// por exemplo, var jQuery = require("jquery")(window);
		// Veja o ticket trac-14549 para mais informações.
		module.exports = global.document ?
			factory(global, true):
			função(w){
				if (!w.documento) {
					throw new Error( "jQuery requer uma janela com um documento" );
				}
				retorna fábrica(w);
			};
	} senão {
		fábrica(global);
	}

// Passa isso se a janela ainda não estiver definida
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lança exceções quando código não estrito (por exemplo, ASP.NET 4.5) acessa o modo estrito
// argumentos.callee.caller (trac-13335). Mas a partir do jQuery 3.0 (2016), o modo estrito deve ser comum
// o suficiente para que todas essas tentativas sejam guardadas em um bloco try.
"usar estrito";

var ar = [];

var getProto = Object.getPrototypeOf;

var fatia = arr.fatia;

var flat = arr.flat ? function(array){
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

suporte a var = {};

var isFunction = function isFunction( obj ) {

		// Suporte: Chrome <=57, Firefox <=52
		// Em alguns navegadores, typeof retorna "function" para elementos HTML <object>
		// (ou seja, `typeof document.createElement( "object" ) === "function"`).
		// Não queremos classificar *nenhum* nó DOM como uma função.
		// Suporte: QtWeb <=3.8.5, WebKit <=534.34, ferramenta wkhtmltopdf <=0.12.5
		// Mais para o antigo WebKit, typeof retorna "função" para coleções HTML
		// (por exemplo, `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "função" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "função";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var documento = janela.documento;



	var preservadoScriptAttributes = {
		tipo: verdadeiro,
		src: verdade,
		nonce: verdade,
		noModule: true
	};

	function DOMEval( código, nó, doc ) {
		doc = doc || documento;

		var i, val,
			script = doc.createElement( "script" );

		script.texto = código;
		if (nó) {
			for (i em preservadoScriptAttributes) {

				// Suporte: Firefox 64+, Edge 18+
				// Alguns navegadores não suportam a propriedade "nonce" em scripts.
				// Por outro lado, apenas usar `getAttribute` não é suficiente, pois
				// o atributo `nonce` é redefinido para uma string vazia sempre que
				// torna-se conectado ao contexto de navegação.
				// Veja https://github.com/whatwg/html/issues/2369
				// Veja https://html.spec.whatwg.org/#nonce-attributes
				// A verificação `node.getAttribute` foi adicionada para fins de
				// `jQuery.globalEval` para que ele possa falsificar um nó não contendo
				// através de um objeto.
				val = nó[i] || node.getAttribute && node.getAttribute( i );
				if (val) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType(obj){
	if (obj == null) {
		return obj + "";
	}

	// Suporte: apenas Android <=2.3 (RegExp funcional)
	return typeof obj === "objeto" || typeof obj === "função" ?
		class2type[ toString.call( obj ) ] || "objeto":
		tipo de obj;
}
/* Símbolo global */
// Definir este global em .eslintrc.json criaria o perigo de usar o global
// desprotegido em outro lugar, parece mais seguro definir global apenas para este módulo



var
	versão = "3.6.1",

	// Define uma cópia local do jQuery
	jQuery = function(seletor, contexto) {

		// O objeto jQuery é na verdade apenas o construtor init 'aprimorado'
		// Precisa de init se o jQuery for chamado (apenas permita que o erro seja lançado se não for incluído)
		return new jQuery.fn.init(seletor, contexto);
	};

jQuery.fn = jQuery.prototype = {

	// A versão atual do jQuery sendo usada
	jquery: versão,

	construtor: jQuery,

	// O comprimento padrão de um objeto jQuery é 0
	comprimento: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Obtém o enésimo elemento no conjunto de elementos correspondentes OU
	// Obtém todo o elemento combinado definido como um array limpo
	get: function(num){

		// Retorna todos os elementos em um array limpo
		if ( num == null ) {
			return slice.call( this );
		}

		// Retorna apenas um elemento do conjunto
		retornar número < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Pega um array de elementos e coloca na pilha
	// (retornando o novo conjunto de elementos correspondentes)
	pushStack: function(elems) {

		// Construir um novo conjunto de elementos correspondentes do jQuery
		var ret = jQuery.merge( this.constructor(), elems );

		// Adiciona o objeto antigo na pilha (como referência)
		ret.prevObject = this;

		// Retorna o conjunto de elementos recém-formado
		retorno ret;
	},

	// Executa um retorno de chamada para cada elemento no conjunto correspondente.
	cada: function(retorno de chamada) {
		return jQuery.each( this, callback );
	},

	map: function(retorno de chamada) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call(elem,i,elem);
		}));
	},

	fatia: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	primeiro: function(){
		return this.eq( 0 );
	},

	ultimo: function() {
		return this.eq( -1 );
	},

	função par() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			retorno (i + 1) % 2;
		}));
	},

	Função estranha() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			retorno i % 2;
		}));
	},

	eq: function(i){
		var len = this.length,
			j = +i + (i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	fim: função(){
		return this.prevObject || this.construtor();
	},

	// Apenas para uso interno.
	// Comporta-se como um método de Array, não como um método jQuery.
	empurre empurre,
	sort: arr.sort,
	emenda: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		alvo = argumentos[ 0 ] || {},
		e = 1,
		comprimento = argumentos.comprimento,
		profundo = falso;

	// Lida com uma situação de cópia profunda
	if ( typeof target === "boolean" ) {
		profundo = alvo;

		// Ignora o booleano e o alvo
		alvo = argumentos[i] || {};
		i++;
	}

	// Manipula o caso quando o destino é uma string ou algo assim (possível em cópia profunda)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		destino = {};
	}

	// Estende o próprio jQuery se apenas um argumento for passado
	if (i === comprimento) {
		alvo = isso;
		eu--;
	}

	for ( ; i < comprimento; i++ ) {

		// Lida apenas com valores não nulos/indefinidos
		if ( ( opções = argumentos[ i ] ) != null ) {

			// Estende o objeto base
			for (nome nas opções) {
				cópia = opções[ nome ];

				// Impede a poluição do Object.prototype
				//Evita loop sem fim
				if ( nome === "__proto__" || destino === copiar ) {
					Prosseguir;
				}

				// Recurse se estivermos mesclando objetos simples ou arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = destino[ nome ];

					// Garante o tipo adequado para o valor de origem
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if (!copyIsArray && !jQuery.isPlainObject(src)) {
						clone = {};
					} senão {
						clone = src;
					}
					copyIsArray = false;

					// Nunca mova objetos originais, clone-os
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Não traz valores indefinidos
				} else if ( copy !== undefined ) {
					destino[ nome ] = copiar;
				}
			}
		}
	}

	// Retorna o objeto modificado
	alvo de retorno;
};

jQuery.extend({

	// Único para cada cópia do jQuery na página
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Suponha que o jQuery esteja pronto sem o módulo pronto
	isReady: verdade,

	erro: function( msg ) {
		jogue novo Erro( msg );
	},

	noop: function() {},

	isPlainObject: function(obj) {
		var proto, Ctor;

		// Detecta negativos óbvios
		// Use toString em vez de jQuery.type para capturar objetos do host
		if ( !obj || toString.call( obj ) !== "[objeto Objeto]" ) {
			retorna falso;
		}

		proto = getProto( obj );

		// Objetos sem protótipo (por exemplo, `Object.create( null )`) são simples
		if ( !proto ) {
			retorne verdadeiro;
		}

		// Objetos com protótipo são claros se eles foram construídos por uma função Object global
		Ctor = hasOwn.call( proto, "construtor" ) && proto.constructor;
		return typeof Ctor === "função" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function(obj) {
		nome da var;

		for (nome em obj) {
			retorna falso;
		}
		retorne verdadeiro;
	},

	// Avalia um script em um contexto fornecido; volta para o global
	// se não for especificado.
	globalEval: function( código, opções, doc ) {
		DOMEval( código, { nonce: options && options.nonce }, doc );
	},

	cada: function(obj, retorno de chamada) {
		var comprimento, i = 0;

		if ( isArrayLike( obj ) ) {
			comprimento = obj.comprimento;
			for ( ; i < comprimento; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					parar;
				}
			}
		} senão {
			para (i em obj) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					parar;
				}
			}
		}

		retornar obj;
	},

	// os resultados são apenas para uso interno
	makeArray: function(arr, resultados) {
		var ret = resultados || [];

		if (arr!= null) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge(ret,
					typeof arr === "string" ?
						[arr]: arr
				);
			} senão {
				push.call(ret, arr);
			}
		}

		retorno ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
	// push.apply(_, arraylike) lança no antigo WebKit
	mesclar: function(primeiro, segundo) {
		var len = +segundo.comprimento,
			j = 0,
			i = primeiro.comprimento;

		for ( ; j < len; j++ ) {
			primeiro[i++] = segundo[j];
		}

		primeiro.comprimento = i;

		volte primeiro;
	},

	grep: function(elems, callback, invert) {
		var callbackInverse,
			correspondências = [],
			e = 0,
			comprimento = elems.comprimento,
			callbackExpect = !invert;

		// Percorre o array, salvando apenas os itens
		// que passa a função validadora
		for ( ; i < comprimento; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		partidas de retorno;
	},

	// arg é apenas para uso interno
	map: function(elems, callback, arg) {
		var comprimento, valor,
			e = 0,
			ret = [];

		// Percorre o array, traduzindo cada um dos itens para seus novos valores
		if ( isArrayLike( elems ) ) {
			comprimento = elems.comprimento;
			for ( ; i < comprimento; i++ ) {
				valor = callback( elems[ i ], i, arg );

				if ( valor != null ) {
					ret.push( valor );
				}
			}

		// Passa por todas as chaves do objeto,
		} senão {
			para (i em elementos) {
				valor = callback( elems[ i ], i, arg );

				if ( valor != null ) {
					ret.push( valor );
				}
			}
		}

		// Achata quaisquer arrays aninhados
		return flat(ret);
	},

	// Um ​​contador GUID global para objetos
	guia: 1,

	// jQuery.support não é usado no Core, mas outros projetos anexam seus
	// propriedades para ele, então ele precisa existir.
	suporte: suporte
});

if ( typeof Símbolo === "função" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Preencher o mapa class2type
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, nome ) {
		class2type[ "[objeto " + nome + "]" ] = name.toLowerCase();
	});

function isArrayLike( obj ) {

	// Suporte: apenas iOS 8.2 real (não reproduzível no simulador)
	// Verificação `in` usada para evitar erro JIT (gh-2145)
	// hasOwn não é usado aqui devido a falsos negativos
	// em relação ao comprimento da lista de nós no IE
	var comprimento = !!obj && "comprimento" em obj && obj.length,
		tipo = toType(obj);

	if ( isFunction( obj ) || isWindow( obj ) ) {
		retorna falso;
	}

	tipo de retorno === "matriz" || comprimento === 0 ||
		typeof comprimento === "número" && comprimento > 0 && ( comprimento - 1 ) em obj;
}
var chiar =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation e outros colaboradores
 * Lançado sob a licença MIT
 * https://js.foundation/
 *
 * Data: 2021-02-16
 */
(função(janela){
var eu,
	Apoio, suporte,
	Expr,
	getTexto,
	éXML,
	tokenizar,
	compilar,
	selecione,
	mais externoContexto,
	sortInput,
	temDuplicado,

	// Documento local vars
	setDocumento,
	documento,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyCorrespondências,
	fósforos,
	contém,

	// Dados específicos da instância
	expando = "chiar" + 1 * new Date(),
	documento preferido = window.document,
	dirruns = 0,
	feito = 0,
	classCache = criarCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function(a, b){
		if (a === b){
			temDuplicado = true;
		}
		retornar 0;
	},

	// Métodos de instância
	hasOwn = ( {} ).hasOwnProperty,
	ar = [],
	pop = arr.pop,
	pushNativo = arr.push,
	push = arr.push,
	fatia = arr.fatia,

	// Use um indexOf simplificado, pois é mais rápido que o nativo
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( lista, elem ) {
		var i = 0,
			len = lista.comprimento;
		for ( ; i < len; i++ ) {
			if ( lista[ i ] === elem ) {
				retorno eu;
			}
		}
		retornar -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Expressões regulares

	// http://www.w3.org/TR/css3-selectors/#whitespace
	espaço em branco = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identificador = "(?:\\\\[\\da-fA-F]{1,6}" + espaço em branco +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Seletores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	atributos = "\\[" + espaço em branco + "*(" + identificador + ")(?:" + espaço em branco +

		// Operador (captura 2)
		"*([*^$|!~]?=)" + espaço em branco +

		// "Valores de atributo devem ser identificadores CSS [captura 5]
		// ou strings [captura 3 ou captura 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"] )*)\"|(" + identificador + "))|)" +
		espaço em branco + "*\\]",

	pseudos = ":(" + identificador + ")(?:\\((" +

		// Para reduzir o número de seletores que precisam ser tokenizados no preFilter, prefira os argumentos:
		// 1. citado (captura 3; captura 4 ou captura 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*) \")|" +

		// 2. simples (captura 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + atributos + ")*)|" +

		// 3. qualquer outra coisa (captura 2)
		".*" +
		")\\)|)",

	// Espaço em branco inicial e sem escape, capturando alguns caracteres sem espaço em branco que precedem o último
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + espaço em branco + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		espaço em branco + "+$", "g" ),

	rcomma = new RegExp( "^" + espaço em branco + "*," + espaço em branco + "*" ),
	rcombinators = new RegExp( "^" + espaço em branco + "*([>+~]|" + espaço em branco + ")" + espaço em branco +
		"*" ),
	rdescend = new RegExp(espaço em branco + "|>" ),

	rpseudo = new RegExp( pseudos ),
	Ridentifier = new RegExp( "^" + identificador + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identificador + ")" ),
		"CLASS": new RegExp( "^\\.(" + identificador + ")" ),
		"TAG": new RegExp( "^(" + identificador + "|[*])" ),
		"ATTR": new RegExp( "^" + atributos ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(somente|primeiro|último|nº|nº-último)-(filho|do-tipo)(?:\\(" +
			espaço em branco + "*(par|ímpar|(([+-]|)(\\d*)n|)" + espaço em branco + "*(?:([+-]|)" +
			espaço em branco + "*(\\d+)|))" + espaço em branco + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// Para uso em bibliotecas que implementam .is()
		// Usamos isso para correspondência POS em `select`
		"needsContext": new RegExp( "^" + espaço em branco +
			"*[>+~]|:(par|ímpar|eq|gt|lt|nth|primeiro|último)(?:\\(" + espaço em branco +
			"*((?:-\\d)?\\d*)" + espaço em branco + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	entradas = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	nativo = /^[^{]+\{\s*\[nativo \w/,

	// ID ou seletores TAG ou CLASS facilmente analisáveis/recuperáveis
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapa
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + espaço em branco + "?|\\\\([^\\r\\n\\f])" , "g" ),
	funescape = function( escape, nonHex ) {
		var alto = "0x" + escape.slice( 1 ) - 0x10000;

		retornar não Hex ?

			// Retira o prefixo de barra invertida de uma sequência de escape não hexadecimal
			não Hex :

			// Substitui uma sequência de escape hexadecimal pelo ponto de código Unicode codificado
			// Suporte: IE <=11+
			// Para valores fora do Plano Multilíngue Básico (BMP), construa manualmente um
			//par substituto
			alto < 0?
				String.fromCharCode( high + 0x10000 ):
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Serialização de string/identificador CSS
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function(ch, asCodePoint) {
		if (asCodePoint) {

			// U+0000 NULL torna-se U+FFFD CARACTER DE SUBSTITUIÇÃO
			if (ch === "\0") {
				return "\uFFFD";
			}

			// Caracteres de controle e números (dependendo da posição) são escapados como pontos de código
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Outros caracteres ASCII potencialmente especiais recebem escape de barra invertida
		return "\\" + ch;
	},

	// Usado para iframes
	// Veja setDocument()
	// Remover o wrapper da função causa uma "Permissão Negada"
	// erro no IE
	unloadHandler = function() {
		setDocumento();
	},

	inDisabledFieldset = addCombinator(
		function(elem){
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Otimizar para push.apply( _, NodeList )
tentar {
	push.apply(
		(arr = slice.call(ferredDoc.childNodes)),
		preferidoDoc.childNodes
	);

	// Suporte: Android<4.0
	// Detecta push.apply com falha silenciosa
	// eslint-disable-next-line no-unused-expressions
	arr[ferredDoc.childNodes.length].nodeType;
} pegar ( e ) {
	push = { aplicar: arr.length ?

		// Aproveita a fatia se possível
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		//Suporte: IE<9
		// Caso contrário, anexa diretamente
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Não pode confiar em NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			alvo.comprimento = j - 1;
		}
	};
}

function Sizzle( seletor, contexto, resultados, semente ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType é padronizado como 9, já que o padrão de contexto é document
		nodeType = contexto ? context.nodeType : 9;

	resultados = resultados || [];

	// Retorna mais cedo de chamadas com seletor ou contexto inválido
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		resultados de retorno;
	}

	// Tentar atalhos para encontrar operações (ao invés de filtros) em documentos HTML
	if ( !semente ) {
		setDocument(contexto);
		contexto = contexto || documento;

		if (documentIsHTML) {

			// Se o seletor for suficientemente simples, tente usar um método DOM "get*By*"
			// (exceto contexto DocumentFragment, onde os métodos não existem)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// Seletor de ID
				if ( ( m = corresponde [ 1 ] ) ) {

					// Contexto do documento
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById(m))) {

							// Suporte: IE, Opera, Webkit
							// TODO: identifica as versões
							// getElementById pode corresponder elementos por nome em vez de ID
							if (elem.id === m) {
								resultados.push(elem);
								resultados de retorno;
							}
						} senão {
							resultados de retorno;
						}

					// Contexto do elemento
					} senão {

						// Suporte: IE, Opera, Webkit
						// TODO: identifica as versões
						// getElementById pode corresponder elementos por nome em vez de ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contém( contexto, elemento ) &&
							elem.id === m) {

							resultados.push(elem);
							resultados de retorno;
						}
					}

				// Seletor de tipo
				} else if ( match[ 2 ] ) {
					push.apply( resultados, context.getElementsByTagName( selector ) );
					resultados de retorno;

				// Seletor de classe
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply(resultados, context.getElementsByClassName(m));
					resultados de retorno;
				}
			}

			// Aproveita querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ seletor + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Suporte: apenas IE 8
				// Excluir elementos do objeto
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "objeto" ) ) {

				novoSeletor = seletor;
				novoContexto = contexto;

				// qSA considera elementos fora de uma raiz de escopo ao avaliar filho ou
				// combinadores descendentes, que não é o que queremos.
				// Nesses casos, contornamos o comportamento prefixando cada seletor no
				// lista com um seletor de ID referenciando o contexto do escopo.
				// A técnica também deve ser usada quando um combinador principal é usado
				// pois esses seletores não são reconhecidos por querySelectorAll.
				// Obrigado a Andrew Dupont por esta técnica.
				if ( nodeType === 1 &&
					( rdescend.test(seletor) || rcombinators.test(seletor))) {

					// Expandir o contexto para seletores irmãos
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						contexto;

					// Podemos usar :scope em vez do ID hack se o navegador
					// suporta & se não estivermos alterando o contexto.
					if ( newContext !== contexto || !support.scope ) {

						// Captura o ID de contexto, configurando-o primeiro, se necessário
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace(rcssescape, fcssescape);
						} senão {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefixa cada seletor na lista
					grupos = tokenize(seletor);
					i = grupos.comprimento;
					enquanto eu-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector(grupos[i]);
					}
					newSelector = groups.join( "," );
				}

				tentar {
					push.apply( resultados,
						newContext.querySelectorAll( newSelector )
					);
					resultados de retorno;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finalmente {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// Todos os outros
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Crie caches de valores-chave de tamanho limitado
 * @returns {function(string, object)} Retorna os dados do objeto após armazená-lo em si mesmo com
 * nome da propriedade a string (com sufixo de espaço) e (se o cache for maior que Expr.cacheLength)
 * excluindo a entrada mais antiga
 */
função criarCache() {
	var chaves = [];

	função cache( chave, valor ) {

		// Use (chave + " ") para evitar a colisão com as propriedades do protótipo nativo (consulte o problema nº 157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Mantém apenas as entradas mais recentes
			delete cache[ keys.shift() ];
		}
		return (cache[ chave + " " ] = valor );
	}
	cache de retorno;
}

/**
 * Marcar uma função para uso especial pelo Sizzle
 * @param {Function} fn A função para marcar
 */
function markFunction( fn ) {
	fn[expandir] = verdadeiro;
	retornar f;
}

/**
 * Teste de suporte usando um elemento
 * @param {Function} fn Passou o elemento criado e retorna um resultado booleano
 */
função assert(fn){
	var el = document.createElement( "fieldset" );

	tentar {
		return !!fn( el );
	} pegar ( e ) {
		retorna falso;
	} finalmente {

		// Remove de seu pai por padrão
		if (el.parentNode) {
			el.parentNode.removeChild( el );
		}

		// libera memória no IE
		e = nulo;
	}
}

/**
 * Adiciona o mesmo manipulador para todos os attrs especificados
 * @param {String} attrs Lista de atributos separada por pipe
 * @param {Function} handler O método que será aplicado
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.comprimento;

	enquanto eu-- ) {
		Expr.attrHandle[ arr[ i ] ] = manipulador;
	}
}

/**
 * Verifica a ordem do documento de dois irmãos
 * @param {Element} a
 * @param {Elemento} b
 * @returns {Number} Retorna menor que 0 se a preceder b, maior que 0 se a seguir b
 */
function verificar irmão(a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use o IE sourceIndex se disponível em ambos os nós
	if (dif) {
		retorno diferencial;
	}

	// Verifica se b segue a
	if (cur) {
		while ( ( cur = cur.nextSibling ) ) {
			if (cur === b) {
				retornar -1;
			}
		}
	}

	retornar um? 1: -1;
}

/**
 * Retorna uma função para usar em pseudos para tipos de entrada
 * @param {String} tipo
 */
function createInputPseudo( tipo ) {
	return function(elem){
		var nome = elem.nodeName.toLowerCase();
		nome de retorno === "entrada" && elem.type === tipo;
	};
}

/**
 * Retorna uma função para usar em pseudos para botões
 * @param {String} tipo
 */
function createButtonPseudo( tipo ) {
	return function(elem){
		var nome = elem.nodeName.toLowerCase();
		return ( nome === "entrada" || nome === "botão" ) && elem.type === type;
	};
}

/**
 * Retorna uma função para usar em pseudos para :enabled/:disabled
 * @param {Boolean} disabled true para :disabled; falso para: ativado
 */
function createDisabledPseudo( disabled ) {

	// Conhecido :disabled falsos positivos: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function(elem){

		// Apenas certos elementos podem corresponder a :enabled ou :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" em elem ) {

			// Verifica se há deficiência herdada em elementos não desabilitados relevantes:
			// * elementos associados a formulários listados em um fieldset desabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opção em um optgroup desabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos esses elementos têm uma propriedade "form".
			if ( elem.parentNode && elem.disabled === false ) {

				// Elementos de opção adiam para um optgroup pai se presente
				if ( "rótulo" em elem ) {
					if ( "rótulo" em elem.parentNode ) {
						return elem.parentNode.disabled === desativado;
					} senão {
						return elem.disabled === desabilitado;
					}
				}

				// Suporte: IE 6 - 11
				// Use a propriedade de atalho isDisabled para verificar ancestrais do conjunto de campos desabilitados
				return elem.isDisabled === desativado ||

					// Onde não houver isDisabled, verifique manualmente
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === desabilitado;
			}

			return elem.disabled === desabilitado;

		// Tente eliminar elementos que não podem ser desabilitados antes de confiar na propriedade desabilitada.
		// Algumas vítimas são pegas em nossa rede (rótulo, legenda, menu, faixa), mas não deveria
		// mesmo existir neles, muito menos ter um valor booleano.
		} else if("label" in elem){
			return elem.disabled === desabilitado;
		}

		// Os elementos restantes não são :enabled nem :disabled
		retorna falso;
	};
}

/**
 * Retorna uma função para usar em pseudos para posicionais
 * @param {Função} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( função( argumento ) {
		argumento = +argumento;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argumento ),
				i = matchIndexes.length;

			// Corresponde aos elementos encontrados nos índices especificados
			enquanto eu-- ) {
				if ( semente[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matchs[ j ] = seed[ j ] );
				}
			}
		});
	});
}

/**
 * Verifica a validade de um nó como um contexto Sizzle
 * @param {Element|Object=} contexto
 * @returns {Element|Object|Boolean} O nó de entrada se for aceitável, caso contrário um valor falso
 */
function testContext(contexto) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expor vars de suporte por conveniência
suporte = Sizzle.support = {};

/**
 * Detecta nós XML
 * @param {Element|Object} elem Um elemento ou documento
 * @returns {Boolean} True iff elem é um nó XML não HTML
 */
isXML = Sizzle.isXML = function(elem) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Suporte: IE <=8
	// Assume HTML quando documentElement ainda não existe, como dentro do carregamento de iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Define variáveis ​​relacionadas ao documento uma vez com base no documento atual
 * @param {Element|Object} [doc] Um elemento ou objeto de documento a ser usado para definir o documento
 * @returns {Object} Retorna o documento atual
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = nó? node.ownerDocument || nó : documento preferido;

	// Retorna mais cedo se doc for inválido ou já selecionado
	// Suporte: IE 11+, Edge 17 - 18+
	// IE/Edge às vezes lança um erro "Permissão negada" ao fazer uma comparação estrita
	// dois documentos; comparações superficiais funcionam.
	// eslint-disable-next-line eqeqeq
	if ( doc == documento || doc.nodeType !== 9 || !doc.documentElement ) {
		documento de retorno;
	}

	// Atualiza as variáveis ​​globais
	documento = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Suporte: IE 9 - 11+, Edge 12 - 18+
	// Acessar documentos iframe após descarregar gera erros de "permissão negada" (jQuery #13936)
	// Suporte: IE 11+, Edge 17 - 18+
	// IE/Edge às vezes lança um erro "Permissão negada" ao fazer uma comparação estrita
	// dois documentos; comparações superficiais funcionam.
	// eslint-disable-next-line eqeqeq
	if (preferidoDoc != documento &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Suporte: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener( "descarregar", unloadHandler, false );

		// Suporte: IE 9 - 10 apenas
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Suporte: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 apenas, Firefox <=3.6 - 31 apenas,
	// Safari 4 - 5 apenas, Opera <=11.6 - 12.x apenas
	// IE/Edge e navegadores mais antigos não suportam a pseudo-classe :scope.
	// Suporte: apenas Safari 6.0
	// Safari 6.0 suporta :scope mas é um alias de :root lá.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	});

	/* Atributos
	-------------------------------------------------- -------------------- */

	//Suporte: IE<8
	// Verifique se getAttribute realmente retorna atributos e não propriedades
	// (exceto booleanos do IE8)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	});

	/* getElemento(s)Por*
	-------------------------------------------------- -------------------- */

	// Verifica se getElementsByTagName("*") retorna apenas elementos
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	});

	//Suporte: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	//Suporte: IE<10
	// Verifica se getElementById retorna elementos por nome
	// Os métodos getElementById quebrados não pegam nomes definidos programaticamente,
	// então use um teste indireto getElementsByName
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// filtro de ID e localizar
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function(id) {
			var attrId = id.replace( runescape, funescape );
			return function(elem){
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function(id, context) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				retornar ele? [ ele ] : [];
			}
		};
	} senão {
		Expr.filter[ "ID" ] = function(id) {
			var attrId = id.replace( runescape, funescape );
			return function(elem){
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				nó de retorno && node.value === attrId;
			};
		};

		// Suporte: IE 6 - 7 apenas
		// getElementById não é confiável como atalho de busca
		Expr.find[ "ID" ] = function(id, context) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById(id);

				if (elem) {

					//Verifica o atributo id
					nó = elem.getAttributeNode( "id" );
					if ( nó && nó.valor === id ) {
						return [ ele ];
					}

					// Retorna a getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while((elem=elems[i++])){
						nó = elem.getAttributeNode( "id" );
						if ( nó && nó.valor === id ) {
							return [ ele ];
						}
					}
				}

				Retorna [];
			}
		};
	}

	// Marcação
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function(tag, contexto) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// Nós DocumentFragment não possuem gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function(tag, contexto) {
			var elem,
				tmp = [],
				e = 0,

				// Por feliz coincidência, um gEBTN (quebrado) também aparece nos nós DocumentFragment
				resultados = context.getElementsByTagName( tag );

			// Filtra possíveis comentários
			if (tag === "*" ) {
				while ( ( elem = resultados[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push(elem);
					}
				}

				retornar tmp;
			}
			resultados de retorno;
		};

	// Classe
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	-------------------------------------------------- -------------------- */

	// Suporte QSA e MatchSelector

	// matchesSelector(:active) reporta false quando true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) informa falso quando verdadeiro (Chrome 21)
	// Permitimos isso por causa de um bug no IE8/9 que gera um erro
	// sempre que `document.activeElement` é acessado em um iframe
	// Então, permitimos que :focus passe pelo QSA o tempo todo para evitar o erro do IE
	// Veja https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Construir regex QSA
		// Estratégia Regex adotada de Diego Perini
		assert(função(el){

			entrada var;

			// Select é definido como string vazia de propósito
			// Isso é para testar o tratamento do IE de não explicitamente
			// definindo um atributo de conteúdo booleano,
			// já que sua presença deve ser suficiente
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Suporte: IE8, Opera 11-12.16
			// Nada deve ser selecionado quando strings vazias seguem ^= ou $= ou *=
			// O atributo de teste deve ser desconhecido no Opera, mas "seguro" para WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + espaço em branco + "*(?:''|\"\")" );
			}

			// Suporte: IE8
			// Atributos booleanos e "valor" não são tratados corretamente
			if ( !el.querySelectorAll( "[selecionado]") ).length ) {
				rbuggyQSA.push( "\\[" + espaço em branco + "*(?:value|" + booleans + ")" );
			}

			// Suporte: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=");
			}

			// Suporte: IE 11+, Edge 15 - 18+
			// IE 11/Edge não encontra elementos em uma consulta `[name='']` em alguns casos.
			// Adicionando um atributo temporário ao documento antes que a seleção funcione
			// em torno do problema.
			// Curiosamente, o IE 10 e versões anteriores não parecem ter o problema.
			entrada = document.createElement( "entrada" );
			input.setAttribute( "nome", "" );
			el.appendChild(entrada);
			if (!el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + espaço em branco + "*nome" + espaço em branco + "*=" +
					espaço em branco + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked deve retornar os elementos de opção selecionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 lança erro aqui e não verá testes posteriores
			if (!el.querySelectorAll( ":checked").length) {
				rbuggyQSA.push( ":checked" );
			}

			// Suporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// Falha do `selector#id sibling-combinator selector` na página
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Suporte: Firefox <=3.6 - 5 apenas
			// O Firefox antigo não lança um identificador com escape incorreto.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		});

		assert(função(el){
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Suporte: Aplicativos Nativos do Windows 8
			// Os atributos type e name são restritos durante a atribuição .innerHTML
			var entrada = document.createElement( "entrada" );
			input.setAttribute( "tipo", "oculto" );
			el.appendChild( entrada ).setAttribute( "nome", "D" );

			// Suporte: IE8
			// Impõe a distinção entre maiúsculas e minúsculas do atributo name
			if ( el.querySelectorAll( "[nome=d]" ).length ) {
				rbuggyQSA.push( "nome" + espaço em branco + "*[*^$|!~]?=");
			}

			// FF 3.5 - :enabled/:disabled e elementos ocultos (elementos ocultos ainda estão ativados)
			// IE8 lança erro aqui e não verá testes posteriores
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":habilitado", ":desabilitado" );
			}

			// Suporte: IE9-11+
			// O seletor :disabled do IE não pega os filhos de fieldsets desabilitados
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":habilitado", ":desabilitado" );
			}

			// Suporte: Opera 10 - 11 apenas
			// Opera 10-11 não lança pseudos inválidos pós-vírgula
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		});
	}

	if ( ( support.matchesSelector = rnative.test( ( match = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert(função(el){

			// Verifica se é possível fazer matchSelector
			// em um nó desconectado (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// Isso deve falhar com uma exceção
			// Gecko não dá erro, retorna falso
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contém
	-------------------------------------------------- -------------------- */
	hasCompare = rnative.test(docElem.compareDocumentPosition);

	// O elemento contém outro
	// Propositalmente auto-exclusivo
	// Como em, um elemento não contém a si mesmo
	contém = hasCompare || rnative.test(docElem.contains) ?
		função(a,b){
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			retorne um === bup || !!( bup && bup.nodeType === 1 && (
				adown.contém ?
					adown.contains(bup):
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		função(a,b){
			se ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						retorne verdadeiro;
					}
				}
			}
			retorna falso;
		};

	/* Ordenação
	-------------------------------------------------- -------------------- */

	// Ordenação da ordem do documento
	sortOrder = hasCompare ?
	função(a,b){

		// Sinalizador para remoção duplicada
		if (a === b){
			temDuplicado = true;
			retornar 0;
		}

		// Classifica na existência do método se apenas uma entrada tiver compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if (comparar) {
			retornar comparar;
		}

		// Calcula a posição se ambas as entradas pertencerem ao mesmo documento
		// Suporte: IE 11+, Edge 17 - 18+
		// IE/Edge às vezes lança um erro "Permissão negada" ao fazer uma comparação estrita
		// dois documentos; comparações superficiais funcionam.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition(b):

			// Caso contrário, sabemos que eles estão desconectados
			1;

		// Nós desconectados
		if (comparar & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === comparar ) ) {

			// Escolha o primeiro elemento relacionado ao nosso documento preferido
			// Suporte: IE 11+, Edge 17 - 18+
			// IE/Edge às vezes lança um erro "Permissão negada" ao fazer uma comparação estrita
			// dois documentos; comparações superficiais funcionam.
			// eslint-disable-next-line eqeqeq
			if ( a == documento || a.ownerDocument ==ferredDoc &&
				contém(preferidoDoc, a)) {
				retornar -1;
			}

			// Suporte: IE 11+, Edge 17 - 18+
			// IE/Edge às vezes lança um erro "Permissão negada" ao fazer uma comparação estrita
			// dois documentos; comparações superficiais funcionam.
			// eslint-disable-next-line eqeqeq
			if ( b == documento || b.ownerDocument == documento preferencial &&
				contém(preferidoDoc, b)) {
				retorno 1;
			}

			//Mantém a ordem original
			return sortInput ?
				( indexOf(sortInput, a) - indexOf(sortInput, b)):
				0;
		}

		return compare & 4 ? -1: 1;
	} :
	função(a,b){

		// Sai mais cedo se os nós forem idênticos
		if (a === b){
			temDuplicado = true;
			retornar 0;
		}

		var cur,
			e = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			pb = [ b ];

		// Nós sem pai são documentos ou desconectados
		if ( !aup || !bup ) {

			// Suporte: IE 11+, Edge 17 - 18+
			// IE/Edge às vezes lança um erro "Permissão negada" ao fazer uma comparação estrita
			// dois documentos; comparações superficiais funcionam.
			/* eslint-desativa o eqeqeq */
			retornar um == documento ? -1:
				b == documento? 1:
				/* eqeqeq habilitado para eslint */
				up? -1:
				bup? 1:
				sortInput ?
				( indexOf(sortInput, a) - indexOf(sortInput, b)):
				0;

		// Se os nós são irmãos, podemos fazer uma verificação rápida
		} else if ( aup === bup ) {
			return verificação de irmãos( a, b );
		}

		// Caso contrário, precisamos de listas completas de seus ancestrais para comparação
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift(cur);
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift(cur);
		}

		// Desce a árvore procurando por uma discrepância
		while (ap[i] === bp[i]){
			i++;
		}

		retorno eu?

			// Faz uma verificação de irmãos se os nós têm um ancestral comum
			siblingCheck( ap[i], bp[i]):

			// Caso contrário, os nós em nosso documento classificam primeiro
			// Suporte: IE 11+, Edge 17 - 18+
			// IE/Edge às vezes lança um erro "Permissão negada" ao fazer uma comparação estrita
			// dois documentos; comparações superficiais funcionam.
			/* eslint-desativa o eqeqeq */
			ap[i] ==ferredDoc? -1:
			bp[i] ==ferredDoc? 1:
			/* eqeqeq habilitado para eslint */
			0;
	};

	documento de retorno;
};

Sizzle.matches = function(expr, elementos) {
	return Sizzle(expr, null, null, elementos);
};

Sizzle.matchesSelector = function(elem, expr) {
	setDocument(elem);

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test(expr)) &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		tentar {
			var ret = matches.call( elem, expr );

			// MatchSelector do IE 9 retorna false em nós desconectados
			if ( ret || support.disconnectedMatch ||

				// Da mesma forma, nós desconectados são considerados em um documento
				// fragmento no IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				retorno ret;
			}
		} pegar ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle(expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Definir vars do documento, se necessário
	// Suporte: IE 11+, Edge 17 - 18+
	// IE/Edge às vezes lança um erro "Permissão negada" ao fazer uma comparação estrita
	// dois documentos; comparações superficiais funcionam.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument(contexto);
	}
	return contém(contexto,elem);
};

Sizzle.attr = function(elem, nome) {

	// Definir vars do documento, se necessário
	// Suporte: IE 11+, Edge 17 - 18+
	// IE/Edge às vezes lança um erro "Permissão negada" ao fazer uma comparação estrita
	// dois documentos; comparações superficiais funcionam.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument(elem);
	}

	var fn = Expr.attrHandle[ nome.toLowerCase() ],

		// Não se deixe enganar pelas propriedades Object.prototype (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ):
			Indefinido;

	return val !== indefinido ?
		valor:
		support.attributes || !documentIsHTML ?
			elem.getAttribute(nome):
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				valor.val:
				nulo;
};

Sizzle.escape = function( sel ) {
	return ( sel + " " ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Erro de sintaxe, expressão não reconhecida: " + msg );
};

/**
 * Classificação de documentos e remoção de duplicatas
 * @param resultados {ArrayLike}
 */
Sizzle.uniqueSort = function(resultados) {
	var elem,
		duplicatas = [],
		j = 0,
		i = 0;

	// A menos que *sabemos* que podemos detectar duplicatas, assuma sua presença
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	resultados.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = resultados[ i++ ] ) ) {
			if (elem === resultados[i]){
				j = duplicatas.push(i);
			}
		}
		enquanto (j--) {
			results.splice(duplicatas[ j], 1);
		}
	}

	// Limpa a entrada após ordenar para liberar objetos
	// Veja https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	resultados de retorno;
};

/**
 * Função de utilidade para recuperar o valor de texto de uma matriz de nós DOM
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function(elem) {
	var nó,
		ret = "",
		e = 0,
		nodeType = elem.nodeType;

	if (!nodeType) {

		// Se nenhum nodeType, espera-se que seja um array
		while((node=elem[i++])){

			// Não percorre nós de comentários
			ret += getText( nó );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Usa textContent para elementos
		// uso de innerText removido para consistência de novas linhas (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} senão {

			// Percorre seus filhos
			for ( elem = elem.primeiro Filho; elem; elem = elem.próximoIrmão ) {
				ret += getText(elem);
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Não inclui comentários ou nós de instrução de processamento

	retorno ret;
};

Expr = Sizzle.selectors = {

	// Pode ser ajustado pelo usuário
	cacheLength: 50,

	createPseudo: markFunction,

	partida: matchExpr,

	attrHandle: {},

	achar: {},

	relativo: {
		">": { dir: "parentNode", primeiro: true },
		" ": { dir: "parentNode" },
		"+": { dir: "irmão anterior", primeiro: verdadeiro },
		"~": { dir: "irmão anterior" }
	},

	pré-filtro: {
		"ATTR": function(correspondência) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move o valor dado para match[3] seja entre aspas ou sem aspas
			partida[ 3 ] = ( partida[ 3 ] || partida[ 4 ] ||
				partida[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function(correspondência) {

			/* correspondências de matchExpr["CHILD"]
				1 tipo (somente|nº|...)
				2 o quê (filho | do tipo)
				3 argumentos (par|ímpar|\d*|\d*n([+-]\d+)?|...)
				4 xn-componente do argumento xn+y ([+-]?\d*n|)
				5 sinal do componente xn
				6 x do componente xn
				7 sinal do componente y
				8 anos de componente y
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requer argumento
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// parâmetros numéricos x e y para Expr.filter.CHILD
				// lembre-se que false/true cast respectivamente para 0/1
				combinar[ 4 ] = +( combinar[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ):
					2 * ( match[ 3 ] === "par" || match[ 3 ] === "ímpar" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// outros tipos proíbem argumentos
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			jogo de retorno;
		},

		"PSEUDO": function(correspondência) {
			var excesso,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ]) ) {
				retornar nulo;
			}

			// Aceita argumentos citados como estão
			if ( corresponde [ 3 ] ) {
				partida[ 2 ] = partida[ 4 ] || partida[ 5 ] || "";

			// Retira o excesso de caracteres de argumentos sem aspas
			} else if ( sem aspas && rpseudo.test( sem aspas ) &&

				// Obtém o excesso de tokenize (recursivamente)
				(excesso = tokenize(sem aspas, true)) &&

				// avança para o próximo parêntese de fechamento
				( excesso = unquoted.indexOf( ")", unquoted.length - excesso ) - unquoted.length ) ) {

				// excesso é um índice negativo
				match[ 0 ] = match[ 0 ].slice( 0, excesso );
				match[ 2 ] = unquoted.slice( 0, excesso);
			}

			// Retorna apenas as capturas necessárias pelo método de pseudofiltro (tipo e argumento)
			return match.slice( 0, 3 );
		}
	},

	filtro: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				função(){
					retorne verdadeiro;
				} :
				function(elem){
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASSE": function(className) {
			var padrão = classCache[ className + " " ];

			padrão de retorno ||
				( padrão = new RegExp( "(^|" + espaço em branco +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function(elem) {
							return padrão.teste(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "indefinido" &&
									elem.getAttribute( "classe" ) ||
								""
							);
				});
		},

		"ATTR": function( nome, operador, cheque ) {
			return function(elem){
				var resultado = Sizzle.attr(elem, nome);

				if (resultado == null) {
					operador de retorno === "!=";
				}
				if (!operador) {
					retorne verdadeiro;
				}

				resultado += "";

				/* eslint-disable max-len */

				operador de retorno === "=" ? resultado === verifique:
					operador === "!=" ? resultado !== verifique:
					operador === "^=" ? check && result.indexOf( check ) === 0 :
					operador === "*=" ? check && result.indexOf( check ) > -1 :
					operador === "$=" ? check && result.slice( -check.length ) === check :
					operador === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operador === "|=" ? resultado === verificar || result.slice( 0, check.length + 1 ) === check + "-" :
					falso;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return primeiro === 1 && último === 0 ?

				// Atalho para :nth-*(n)
				function(elem){
					return !!elem.parentNode;
				} :

				function(elem, _context, xml) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simples !== avançar ? "próximoIrmão" : "irmão anterior",
						pai = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						dif = falso;

					if (pai) {

						// :(primeiro|último|somente)-(filho|do tipo)
						if (simples) {
							enquanto (dir) {
								nó = ele;
								while ( ( nó = nó[ dir ] ) ) {
									if (ofType ?
										node.nodeName.toLowerCase() === nome:
										node.nodeType === 1 ) {

										retorna falso;
									}
								}

								// Inverte a direção para :only-* (se ainda não o fizemos)
								start = dir = type === "somente" && !start && "nextSibling";
							}
							retorne verdadeiro;
						}

						inicio = [ para a frente ? pai.primeiro Filho : pai.último Filho ];

						// non-xml :nth-child(...) armazena dados de cache em `parent`
						if ( forward && useCache ) {

							// Busca `elem` de um índice previamente armazenado em cache

							// ...de maneira amigável com gzip
							nó = pai;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Suporte: IE <9 apenas
							// Defenda-se contra attroperties clonadas (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ tipo ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( nó = ++nodeIndex && nó && nó[ dir ] ||

								// Fallback para buscar `elem` desde o início
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// Quando encontrado, armazena os índices em `pai` e quebra
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ tipo ] = [ dirruns, nodeIndex, diff ];
									parar;
								}
							}

						} senão {

							// Usa o índice de elemento armazenado em cache anteriormente, se disponível
							if (useCache){

								// ...de maneira amigável com gzip
								nó = ele;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Suporte: IE <9 apenas
								// Defenda-se contra attroperties clonadas (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ tipo ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-filho(...)
							// ou :nth-last-child(...) ou :nth(-last)?-of-type(...)
							if (dif === false) {

								// Use o mesmo loop acima para buscar `elem` desde o início
								while ( ( nó = ++nodeIndex && nó && nó[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ((ofType?
										node.nodeName.toLowerCase() === nome:
										node.nodeType === 1 ) &&
										++dif) {

										// Armazena em cache o índice de cada elemento encontrado
										if (useCache){
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Suporte: IE <9 apenas
											// Defenda-se contra attroperties clonadas (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ tipo ] = [ dirruns, diff ];
										}

										if ( nó === elem ) {
											parar;
										}
									}
								}
							}
						}

						// Incorpora o deslocamento e verifica o tamanho do ciclo
						diff -= ultimo;
						return diff === primeiro || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function(pseudo, argumento) {

			// nomes de pseudoclasses não diferenciam maiúsculas de minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioriza por diferenciação de maiúsculas e minúsculas caso pseudos personalizados sejam adicionados com letras maiúsculas
			// Lembre-se que setFilters herda de pseudos
			var argumentos,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "pseudo não suportado: " + pseudo);

			// O usuário pode usar createPseudo para indicar que
			// argumentos são necessários para criar a função de filtro
			// assim como Sizzle faz
			if (fn[expandir]){
				return fn(argumento);
			}

			// Mas mantém o suporte para assinaturas antigas
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argumento ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							correspondido = fn( semente, argumento ),
							i = correspondido.comprimento;
						enquanto eu-- ) {
							idx = indexOf( semente, combinado[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					}):
					function(elem){
						return fn(elem, 0, args);
					};
			}

			retornar f;
		}
	},

	pseudos: {

		// Pseudo potencialmente complexos
		"não": markFunction( function(seletor) {

			// Apara o seletor passado para compilar
			// para evitar tratar à esquerda e à direita
			// espaços como combinadores
			var entrada = [],
				resultados = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatcher = matcher( seed, null, xml, [] ),
						i = semente.comprimento;

					// Corresponde a elementos não correspondidos por `matcher`
					enquanto eu-- ) {
						if ( ( elem = unmatched [ i ] ) ) {
							seed[ i ] = !( matchs[ i ] = elem );
						}
					}
				}):
				function(elem, _context, xml) {
					entrada[ 0 ] = elem;
					matcher(entrada, null, xml, resultados);

					// Não mantenha o elemento (questão #299)
					entrada[0] = null;
					return !resultados.pop();
				};
		}),

		"tem": markFunction( function(seletor) {
			return function(elem){
				return Sizzle( seletor, elem ).length > 0;
			};
		}),

		"contém": markFunction( function(texto) {
			text = text.replace( runescape, funescape );
			return function(elem){
				return (elem.textContent || getText(elem)).indexOf(texto) > -1;
			};
		}),

		// "Se um elemento é representado por um seletor :lang()
		// é baseado apenas no valor do idioma do elemento
		// sendo igual ao identificador C,
		// ou começando com o identificador C imediatamente seguido por "-".
		// A correspondência de C com o valor de idioma do elemento é realizada sem distinção entre maiúsculas e minúsculas.
		// O identificador C não precisa ser um nome de idioma válido."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function(lang) {

			// o valor lang deve ser um identificador válido
			if (!ridentifier.test(lang || "")) {
				Sizzle.error( "lang não suportado: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function(elem){
				var eleLang;
				Faz {
					if ((elemLang = documentIsHTML?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang") ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				retorna falso;
			};
		}),

		// Diversos
		"alvo": function(elem){
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"raiz": function(elem){
			return elem === docElem;
		},

		"foco": function(elem) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Propriedades booleanas
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"verificado": function(elem) {

			// Em CSS3, :checked deve retornar os elementos verificados e selecionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "opção" && !!elem.selected );
		},

		"selecionado": function(elem) {

			// Acessar esta propriedade torna selecionado por padrão
			// as opções no Safari funcionam corretamente
			if (elem.parentNode) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Conteúdo
		"vazio": function(elem){

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty é negado pelo elemento (1) ou nós de conteúdo (texto: 3; cdata: 4; entidade ref: 5),
			// mas não por outros (comentário: 8; instrução de processamento: 7; etc.)
			// nodeType < 6 funciona porque os atributos (2) não aparecem como filhos
			for ( elem = elem.primeiro Filho; elem; elem = elem.próximoIrmão ) {
				if ( elem.nodeType < 6 ) {
					retorna falso;
				}
			}
			retorne verdadeiro;
		},

		"pai": function(elem){
			return !Expr.pseudos[ "vazio" ](elem);
		},

		// Tipos de elemento/entrada
		"cabeçalho": function(elem) {
			return rheader.test( elem.nodeName );
		},

		"entrada": function(elem){
			return rinputs.test( elem.nodeName );
		},

		"botão": function(elem) {
			var nome = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || nome === "botão";
		},

		"texto": function(elem){
			var attr;
			return elem.nodeName.toLowerCase() === "entrada" &&
				elem.type === "texto" &&

				//Suporte: IE<8
				// Novos valores de atributo HTML5 (por exemplo, "search") aparecem com elem.type === "text"
				( ( attr = elem.getAttribute( "tipo")) == null ||
					attr.toLowerCase() === "texto");
		},

		// Posição na coleção
		"primeiro": createPositionalPseudo( function() {
			retorno [ 0 ];
		}),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ comprimento - 1 ];
		}),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argumento < 0 ? argumento + comprimento : argumento ];
		}),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < comprimento; i += 2 ) {
				matchIndexes.push(i);
			}
			retornar matchIndexes;
		}),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < comprimento; i += 2 ) {
				matchIndexes.push(i);
			}
			retornar matchIndexes;
		}),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argumento < 0 ?
				argumento + comprimento:
				argumento > comprimento?
					comprimento :
					argumento;
			for ( ; --i >= 0; ) {
				matchIndexes.push(i);
			}
			retornar matchIndexes;
		}),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argumento < 0 ? argumento + comprimento: argumento;
			for ( ; ++i < comprimento; ) {
				matchIndexes.push(i);
			}
			retornar matchIndexes;
		})
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Adiciona pseudos de tipo de botão/entrada
for ( i in { radio: true, checkbox: true, arquivo: true, senha: true, imagem: true } ) {
	Expr.pseudos[i] = createInputPseudo(i);
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[i] = createButtonPseudo(i);
}

// API fácil para criar novos setFilters
função setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		até agora, grupos, pré-filtros,
		em cache = tokenCache[ seletor + " " ];

	if (em cache) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = seletor;
	grupos = [];
	preFilters = Expr.preFilter;

	enquanto (até agora) {

		// Vírgula e primeira execução
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if (corresponder) {

				// Não consome vírgulas à direita como válidas
				soFar = soFar.slice( match[ 0 ].length ) || até aqui;
			}
			groups.push( ( tokens = [] ) );
		}

		correspondido = falso;

		// Combinadores
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			correspondido = match.shift();
			tokens.push({
				valor: correspondido,

				// Lança combinadores descendentes para o espaço
				type: match[ 0 ].replace(rtrim, " " )
			});
			soFar = soFar.fatia(combinado.comprimento);
		}

		// Filtros
		for ( digite Expr.filter ) {
			if ( ( match = matchExpr[ tipo ].exec( soFar ) ) && ( !preFilters[ tipo ] ||
				( match = preFilters[ tipo ]( match ) ) ) ) {
				correspondido = match.shift();
				tokens.push({
					valor: corresponde a d,
					tipo: tipo,
					partidas: partida
				});
				soFar = soFar.fatia(combinado.comprimento);
			}
		}

		if ( !combinado ) {
			parar;
		}
	}

	// Retorna o comprimento do excesso inválido
	// se estamos apenas analisando
	// Caso contrário, lança um erro ou retorna tokens
	return parseOnly ?
		atéFar.comprimento :
		até aqui ?
			Sizzle.error(seletor):

			// Armazena os tokens em cache
			tokenCache( seletor, grupos ).slice( 0 );
};

function toSelector(tokens) {
	var i = 0,
		len = tokens.length,
		seletor = "";
	for ( ; i < len; i++ ) {
		seletor += tokens[ i ].value;
	}
	seletor de retorno;
}

function addCombinator( combinador, combinador, base ) {
	var dir = combinator.dir,
		pular = combinador.próximo,
		chave = pular || dir,
		checkNonElements = base && key === "parentNode",
		feitoNome = feito++;

	return combinator.first ?

		// Verifica contra o elemento ancestral/precedente mais próximo
		function(elem, contexto, xml) {
			while((elem=elem[dir])){
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher(elem, context, xml);
				}
			}
			retorna falso;
		} :

		// Verifica todos os elementos ancestrais/precedentes
		function(elem, contexto, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// Não podemos definir dados arbitrários em nós XML, então eles não se beneficiam do cache combinador
			if (xml) {
				while((elem=elem[dir])){
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher(elem, context, xml)) {
							retorne verdadeiro;
						}
					}
				}
			} senão {
				while((elem=elem[dir])){
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[expandir] = {});

						// Suporte: IE <9 apenas
						// Defenda-se contra attroperties clonadas (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( pular && pular === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || ele;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Atribui a newCache para que os resultados sejam propagados de volta para os elementos anteriores
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} senão {

							// Reutiliza o newcache para que os resultados sejam propagados de volta para os elementos anteriores
							uniqueCache[ chave ] = newCache;

							// Uma correspondência significa que terminamos; uma falha significa que temos que continuar verificando
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								retorne verdadeiro;
							}
						}
					}
				}
			}
			retorna falso;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function(elem, contexto, xml) {
			var i = matchers.length;
			enquanto eu-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					retorna falso;
				}
			}
			retorne verdadeiro;
		} :
		combinadores[ 0 ];
}

function multipleContexts( seletor, contextos, resultados) {
	var i = 0,
		len = contextos.comprimento;
	for ( ; i < len; i++ ) {
		Sizzle( seletor, contextos[ i ], resultados );
	}
	resultados de retorno;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		novoNão correspondido = [],
		e = 0,
		len = unmatched.length,
		mapeado = mapa != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched [ i ] ) ) {
			if (!filter || filter(elem, context, xml)) {
				newUnmatched.push( elem );
				if ( mapeado ) {
					map.push(i);
				}
			}
		}
	}

	retornar novoNão correspondido;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter);
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMapa = [],
			postMapa = [],
			preexistente = resultados.comprimento,

			// Obtém os elementos iniciais da semente ou do contexto
			elems = semente || váriosContextos(
				seletor || "*",
				context.nodeType ? [contexto]: contexto,
				[]
			),

			// Pré-filtro para obter a entrada do matcher, preservando um mapa para sincronização de resultados de sementes
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ):
				elementos,

			matcherOut = matcher ?

				// Se tivermos um postFinder, ou semente filtrada, ou postFilter sem semente ou resultados preexistentes,
				postFinder || ( semente ? preFilter : preexistente || postFilter ) ?

					// ...processamento intermediário é necessário
					[]:

					// ...caso contrário, use os resultados diretamente
					resultados :
				matcherIn;

		// Encontra correspondências primárias
		if (combinador) {
			matcher( matcherIn, matcherOut, contexto, xml);
		}

		//Aplica postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter(temp, [], context, xml);

			// Desfaz a correspondência de elementos com falha, movendo-os de volta para matcherIn
			i = temp.comprimento;
			enquanto eu-- ) {
				if((elem=temp[i])){
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if (semente) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Obtenha o matcherOut final condensando este intermediário em contextos postFinder
					temperatura = [];
					i = matcherOut.length;
					enquanto eu-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restaura matcherIn já que elem ainda não é uma correspondência final
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move os elementos correspondentes da semente para os resultados para mantê-los sincronizados
				i = matcherOut.length;
				enquanto eu-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						(temp = postFinder ? indexOf( seed, elem ): preMap[ i ] ) > -1 ) {

						semente[ temp ] = !( resultados[ temp ] = elem );
					}
				}
			}

		// Adiciona elementos aos resultados, através do postFinder se definido
		} senão {
			matcherOut = condensar(
				matcherOut === resultados?
					matcherOut.splice(preexistente, matcherOut.length):
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, resultados, matcherOut, xml );
			} senão {
				push.apply(resultados, matcherOut);
			}
		}
	});
}

função matcherFromTokens(tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		levandoRelative = Expr.relative[ tokens[ 0 ].type ],
		implícitoRelativo = líderRelativo || Expr.relativa[ " " ],
		i = leadRelative ? 1: 0,

		// O matcher fundamental garante que os elementos sejam acessíveis a partir de contextos de nível superior
		matchContext = addCombinator( function(elem){
			return elem === checkContext;
		}, implícitoRelativo, true ),
		matchAnyContext = addCombinator( function(elem) {
			return indexOf( checkContext, elem ) > -1;
		}, implícitoRelativo, true ),
		matchers = [ function(elem, context, xml) {
			var ret = ( !leadingRelative && ( xml || contexto !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext(elem, context, xml):
					matchAnyContext(elem, contexto, xml));

			// Evite ficar pendurado no elemento (questão #299)
			checkContext = null;
			retorno ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} senão {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Retorna especial ao ver um matcher posicional
			if ( matcher[ expando ] ) {

				// Localiza o próximo operador relativo (se houver) para manuseio adequado
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						parar;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && paraSeletor(

					// Se o token anterior for um combinador descendente, insira um elemento qualquer implícito `*`
					fichas
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace(rtrim, "$1"),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				e = "0",
				incomparável = semente && [],
				conjuntoCombinado = [],
				contextBackup = mais externoContexto,

				// Devemos sempre ter elementos semente ou contexto externo
				elems = semente || byElement && Expr.find[ "TAG" ]( "*", mais externo ),

				// Use dirruns inteiros se este for o matcher mais externo
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.comprimento;

			if (mais externo) {

				// Suporte: IE 11+, Edge 17 - 18+
				// IE/Edge às vezes lança um erro "Permissão negada" ao fazer uma comparação estrita
				// dois documentos; comparações superficiais funcionam.
				// eslint-disable-next-line eqeqeq
				contexto externo = contexto == documento || contexto || mais externo;
			}

			// Adiciona elementos passando elementMatchers diretamente aos resultados
			// Suporte: IE<9, Safari
			// Tolera propriedades NodeList (IE: "length"; Safari: <number>) combinando elementos por id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Suporte: IE 11+, Edge 17 - 18+
					// IE/Edge às vezes lança um erro "Permissão negada" ao fazer uma comparação estrita
					// dois documentos; comparações superficiais funcionam.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument(elem);
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							resultados.push(elem);
							parar;
						}
					}
					if (mais externo) {
						dirruns = dirrunsÚnico;
					}
				}

				// Rastreia elementos sem correspondência para filtros definidos
				if (bySet) {

					// Eles terão passado por todos os possíveis matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Alonga o array para cada elemento, combinado ou não
					if (semente) {
						unmatched.push(elem);
					}
				}
			}

			// `i` é agora a contagem de elementos visitados acima e adicionando-o a `matchedCount`
			// torna o último não negativo.
			matchedCount += i;

			//Aplica filtros de conjunto a elementos sem correspondência
			// NOTA: Isso pode ser ignorado se não houver elementos não correspondidos (ou seja, `matchedCount`
			// é igual a `i`), a menos que não tenhamos visitado _any_ elementos no loop acima porque temos
			// sem correspondência de elementos e sem semente.
			// Incrementar uma string inicial "0" `i` permite que `i` permaneça uma string apenas naquele
			// case, que resultará em um "00" `matchedCount` que difere de `i`, mas também é
			// numericamente zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if (semente) {

					// Reintegra correspondências de elementos para eliminar a necessidade de ordenação
					if (matchedCount > 0) {
						enquanto eu-- ) {
							if (!( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[i] = pop.call(resultados);
							}
						}
					}

					// Descarta os valores do espaço reservado do índice para obter apenas correspondências reais
					setMatched = condense( setMatched );
				}

				// Adiciona correspondências aos resultados
				push.apply( resultados, setMatched );

				// Correspondências de conjuntos sem semente que sucedem vários correspondentes bem-sucedidos estipulam a classificação
				if ( mais externo && !seed && setMatched.length > 0 &&
					(matchedCount + setMatchers.length) > 1) {

					Sizzle.uniqueSort( resultados );
				}
			}

			// Substitui a manipulação de globais por matchers aninhados
			if (mais externo) {
				dirruns = dirrunsÚnico;
				outermostContext = contextBackup;
			}

			retorno incomparável;
		};

	return bySet ?
		markFunction(superMatcher):
		supercombinado;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var eu,
		setMatchers = [],
		elementMatchers = [],
		em cache = compilerCache[ seletor + " " ];

	if ( !cache) {

		// Gera uma função de funções recursivas que podem ser usadas para verificar cada elemento
		if ( !match ) {
			match = tokenize(seletor);
		}
		i = match.length;
		enquanto eu-- ) {
			em cache = matcherFromTokens( match[ i ] );
			if ( em cache[ expando ] ) {
				setMatchers.push( em cache );
			} senão {
				elementMatchers.push( em cache );
			}
		}

		// Armazena em cache a função compilada
		em cache = compiladorCache(
			seletor,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Salva seletor e tokenização
		cached.selector = seletor;
	}
	retornar em cache;
};

/**
 * Uma função de seleção de baixo nível que funciona com o compilado do Sizzle
 * funções do seletor
 * @param {String|Function} seletor Um seletor ou um pré-compilado
 * função seletora construída com Sizzle.compile
 * @param {Elemento} contexto
 * @param {Array} [resultados]
 * @param {Array} [seed] Um conjunto de elementos para corresponder
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compilado = seletor typeof === "função" && seletor,
		match = !seed && tokenize( (seletor = compilado.seletor || seletor));

	resultados = resultados || [];

	// Tenta minimizar as operações se houver apenas um seletor na lista e nenhuma semente
	// (o último dos quais nos garante contexto)
	if ( match.length === 1 ) {

		// Reduz o contexto se o seletor composto principal for um ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !contexto ) {
				resultados de retorno;

			// Matchers pré-compilados ainda verificarão a ascendência, então suba um nível
			} else if (compilado) {
				contexto = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length);
		}

		// Busca um conjunto de sementes para correspondência da direita para a esquerda
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		enquanto eu-- ) {
			token = tokens[i];

			// Aborta se acertarmos um combinador
			if ( Expr.relative[ ( type = token.type ) ] ) {
				parar;
			}
			if ( ( find = Expr.find[ tipo ] ) ) {

				// Pesquisa, expandindo o contexto para os principais combinadores irmãos
				if (( semente = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						contexto
				) ) ) {

					// Se a semente estiver vazia ou nenhum token permanecer, podemos retornar mais cedo
					tokens.splice(i, 1);
					seletor = seed.length && toSelector( tokens );
					if ( !seletor ) {
						push.apply(resultados, semente);
						resultados de retorno;
					}

					parar;
				}
			}
		}
	}

	// Compilar e executar uma função de filtragem se não for fornecida
	// Forneça `match` para evitar a retokenização se modificarmos o seletor acima
	(compilado || compilar(seletor, combinar) )(
		semente,
		contexto,
		!documentIsHTML,
		resultados,
		!contexto || rsibling.test( selector ) && testContext( context.parentNode ) || contexto
	);
	resultados de retorno;
};

// Atribuições únicas

// Estabilidade de ordenação
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Suporte: Chrome 14-35+
// Sempre assume duplicatas se elas não forem passadas para a função de comparação
support.detectDuplicates = !!hasDuplicate;

// Inicializa em relação ao documento padrão
setDocumento();

// Suporte: Webkit<537.32 - Safari 6.0.3/Chrome 25 (corrigido no Chrome 27)
// Nós desanexados seguem *uns aos outros*
support.sortDetached = assert( function( el ) {

	// Deve retornar 1, mas retorna 4 (seguindo)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
});

//Suporte: IE<8
// Impede a "interpolação" de atributo/propriedade
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function(elem, name, isXML) {
		if ( !isXML ) {
			return elem.getAttribute( nome, nome.toLowerCase() === "tipo" ? 1 : 2 );
		}
	});
}

//Suporte: IE<9
// Usa defaultValue no lugar de getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "valor", "" );
	return el.firstChild.getAttribute( "valor" ) === "";
} ) ) {
	addHandle( "valor", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

//Suporte: IE<9
// Use getAttributeNode para buscar booleanos quando getAttribute mentir
if ( !assert( function( el ) {
	return el.getAttribute( "desativado" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ nome ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					valor.val:
					nulo;
		}
	});
}

retornar Chiado;

} )( janela );



jQuery.find = chiar;
jQuery.expr = Sizzle.selectors;

// Descontinuada
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, até ) {
	var correspondido = [],
		truncar = até !== indefinido;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if (truncate && jQuery(elem).is(até)) {
				parar;
			}
			matched.push(elem);
		}
	}
	retorno correspondido;
};


var irmãos = function( n, elem ) {
	var correspondido = [];

	for ( ; n; n = n.próximoIrmão) {
		if ( n.nodeType === 1 && n !== elem ) {
			combinado.push(n);
		}
	}

	retorno correspondido;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName(elem, name) {

	return elem.nodeName && elem.nodeName.toLowerCase() === nome.toLowerCase();

}
var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i );



// Implementa a funcionalidade idêntica para filtro e não
function winnow( elementos, qualificador, not ) {
	if ( isFunction(qualificador)) {
		return jQuery.grep(elementos, função(elem, i) {
			return !!qualifier.call( elem, i, elem ) !== not;
		});
	}

	// Elemento único
	if (qualifier.nodeType) {
		return jQuery.grep(elementos, função(elem){
			return (elem === qualificador) !== not;
		});
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if ( typeof qualificador !== "string" ) {
		return jQuery.grep(elementos, função(elem){
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		});
	}

	// Filtrado diretamente para seletores simples e complexos
	return jQuery.filter(qualificador, elementos, não);
}

jQuery.filter = function(expr, elems, not ) {
	var elem = elems[ 0 ];

	se não ) {
		expr = ":não(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector(elem, expr) ? [ ele ] : [];
	}

	return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
		return elem.nodeType === 1;
	}));
};

jQuery.fn.extend({
	encontrar: function(seletor) {
		var i, ret,
			len = this.length,
			eu = isso;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( seletor ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						retorne verdadeiro;
					}
				}
			}));
		}

		ret = this.pushStack([]);

		for ( i = 0; i < len; i++ ) {
			jQuery.find(seletor, self[i], ret);
		}

		retornar len > 1 ? jQuery.uniqueSort( ret ): ret;
	},
	filtro: function(seletor) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function(seletor) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	é: função(seletor){
		return !!window(
			isto,

			// Se este é um seletor posicional/relativo, verifica a associação no conjunto retornado
			// então $("p:first").is("p:last") não retornará true para um documento com dois "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery(seletor):
				seletor || [],
			falso
		).comprimento;
	}
});


// Inicializa um objeto jQuery


// Uma referência central para a raiz jQuery(document)
var rootjQuery,

	// Uma maneira simples de verificar strings HTML
	// Prioriza #id sobre <tag> para evitar XSS via location.hash (trac-9521)
	// Reconhecimento estrito de HTML (trac-11290: deve começar com <)
	// Atalho simples #id case para velocidade
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function(seletor, contexto, raiz) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !seletor ) {
			devolva isso;
		}

		// O método init() aceita um rootjQuery alternativo
		// para que a migração possa suportar jQuery.sub (gh-2101)
		raiz = raiz || rootjQuery;

		// Manipula strings HTML
		if ( typeof seletor === "string" ) {
			if ( seletor[ 0 ] === "<" &&
				seletor[ seletor.comprimento - 1 ] === ">" &&
				seletor.comprimento >= 3 ) {

				// Suponha que as strings que começam e terminam com <> sejam HTML e pule a verificação de regex
				match = [ null, seletor, null ];

			} senão {
				match = rquickExpr.exec(seletor);
			}

			// Corresponde ao html ou certifique-se de que nenhum contexto seja especificado para #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( corresponde [ 1 ] ) {
					context = context instanceof jQuery ? contexto[ 0 ] : contexto;

					// A opção de executar scripts é verdadeira para back-compat
					// Intencionalmente deixa o erro ser lançado se parseHTML não estiver presente
					jQuery.merge( this, jQuery.parseHTML(
						partida[ 1 ],
						context && context.nodeType ? context.ownerDocumento || contexto: documento,
						verdadeiro
					));

					// MANIPULAÇÃO: $(html, adereços)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for (corresponder no contexto) {

							// Propriedades de contexto são chamadas como métodos se possível
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...e de outra forma definido como atributos
							} senão {
								this.attr( match, context[ match ] );
							}
						}
					}

					devolva isso;

				// MANIPULAÇÃO: $(#id)
				} senão {
					elem = document.getElementById( match[ 2 ] );

					if (elem) {

						// Injeta o elemento diretamente no objeto jQuery
						this[ 0 ] = elem;
						este.comprimento = 1;
					}
					devolva isso;
				}

			// MANIPULAÇÃO: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return (contexto ||raiz).find(seletor);

			// HANDLE: $(expr, contexto)
			// (que é equivalente a: $(context).find(expr)
			} senão {
				return this.constructor(contexto).find(seletor);
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = seletor;
			este.comprimento = 1;
			devolva isso;

		// MANIPULAÇÃO: $(função)
		// Atalho para documento pronto
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready(seletor):

				//Executa imediatamente se pronto não estiver presente
				seletor(jQuery);
		}

		return jQuery.makeArray( seletor, this );
	};

// Dê à função init o protótipo do jQuery para instanciação posterior
init.prototype = jQuery.fn;

// Inicializa a referência central
rootjQuery = jQuery(document);


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Métodos garantidos para produzir um conjunto único ao iniciar a partir de um conjunto único
	garantidoÚnico = {
		filhos: verdade,
		conteúdo: verdadeiro,
		seguinte: verdade,
		anterior: verdadeiro
	};

jQuery.fn.extend({
	tem: function( target ) {
		var target = jQuery( target, this ),
			l = alvos.comprimento;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					retorne verdadeiro;
				}
			}
		});
	},

	mais próximo: function( seletores, contexto) {
		var cur,
			e = 0,
			l = este.comprimento,
			correspondido = [],
			targets = seletores typeof !== "string" && jQuery( seletores );

		// Seletores posicionais nunca correspondem, pois não há contexto _selection_
		if (!rneedsContext.test(seletores)) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== contexto; cur = cur.parentNode ) {

					// Sempre pula fragmentos de documentos
					if (cur.nodeType < 11 && (destinos?
						targets.index(cur) > -1:

						// Não passe não-elementos para Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, seletores ) ) ) {

						matched.push( cur );
						parar;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ): matched );
	},

	// Determina a posição de um elemento dentro do conjunto
	índice: function(elem){

		// Sem argumento, retorna índice no pai
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		//Índice no seletor
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Localiza a posição do elemento desejado
		return indexOf.call( this,

			// Se receber um objeto jQuery, o primeiro elemento é usado
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function(seletor, contexto) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function(seletor) {
		return this.add( seletor == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
});

function irmão(cur, dir) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	retorno cur;
}

jQuery.each({
	pai: function(elem){
		var pai = elem.parentNode;
		return pai && parent.nodeType !== 11 ? pai: nulo;
	},
	pais: function(elem){
		return dir(elem, "parentNode");
	},
	paisAté: function(elem, _i, até) {
		return dir(elem, "parentNode", até );
	},
	próximo: function(elem){
		return irmão(elem, "próximoIrmão");
	},
	anterior: function(elem) {
		return irmão(elem, "irmão anterior");
	},
	nextAll: function(elem){
		return dir(elem, "próximoIrmão");
	},
	prevAll: function(elem) {
		return dir(elem, "irmão anterior");
	},
	nextUntil: function( elem, _i, até ) {
		return dir(elem, "próximoIrmão", até );
	},
	prevUntil: function( elem, _i, até ) {
		return dir(elem, "irmão anterior", até );
	},
	irmãos: function(elem){
		return brothers( ( elem.parentNode || {} ).firstChild, elem );
	},
	filhos: function(elem){
		return irmãos(elem.firstChild);
	},
	conteúdo: function(elem){
		if (elem.contentDocument != null &&

			// Suporte: IE 11+
			// Elementos <object> sem atributo `data` tem um objeto
			// `contentDocument` com um protótipo `null`.
			getProto(elem.contentDocument)) {

			return elem.contentDocument;
		}

		// Suporte: apenas IE 9 - 11, apenas iOS 7, navegador Android <=4.3 apenas
		// Trata o elemento de template como um elemento normal em navegadores que
		// não suporta.
		if ( nodeName( elem, "template") ) {
			elemento = elemento.conteúdo || ele;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, função( nome, fn ) {
	jQuery.fn[ nome ] = function(até, seletor) {
		var correspondido = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Até" ) {
			seletor = até;
		}

		if ( seletor && typeof seletor === "string" ) {
			correspondido = jQuery.filter( seletor, combinado );
		}

		if ( this.length > 1 ) {

			//Remover duplicatas
			if ( !guaranteedUnique[ nome ] ) {
				jQuery.uniqueSort( correspondido);
			}

			// Ordem inversa para pais* e derivativos anteriores
			if ( rparentsprev.test( nome ) ) {
				correspondido.reverso();
			}
		}

		return this.pushStack( matched );
	};
});
var rnothtmlbranco = ( /[^\x20\t\r\n\f]+/g );



// Converte opções formatadas em String em opções formatadas em Objeto
função createOptions(opções){
	var objeto = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		objeto[ sinalizador ] = verdadeiro;
	});
	objeto de retorno;
}

/*
 * Crie uma lista de retorno de chamada usando os seguintes parâmetros:
 *
 * opções: uma lista opcional de opções separadas por espaço que mudará a forma como
 * a lista de callback se comporta ou um objeto de opção mais tradicional
 *
 * Por padrão, uma lista de retorno de chamada funcionará como uma lista de retorno de chamada de evento e pode ser
 * "disparado" várias vezes.
 *
 * Opções possíveis:
 *
 * uma vez: garantirá que a lista de retorno de chamada só possa ser acionada uma vez (como um Diferido)
 *
 * memória: manterá o controle dos valores anteriores e chamará qualquer retorno de chamada adicionado
 * após a lista ser disparada imediatamente com o último "memorizado"
 * valores (como um Diferido)
 *
 * exclusivo: garantirá que um retorno de chamada possa ser adicionado apenas uma vez (sem duplicatas na lista)
 *
 * stopOnFalse: interrompe chamadas quando um retorno de chamada retorna falso
 *
 */
jQuery.Callbacks = function(opções) {

	// Converte as opções de formatadas em String para formatadas em Objeto, se necessário
	// (verificamos o cache primeiro)
	opções = tipo de opções === "string" ?
		createOptions(opções):
		jQuery.extend( {}, opções );

	var // Sinaliza para saber se a lista está disparando no momento
		atirando,

		// Último valor de disparo para listas não esquecíveis
		memória,

		// Sinaliza para saber se a lista já foi disparada
		despedido,

		// Sinalizador para evitar disparos
		trancado,

		// Lista de retorno de chamada real
		lista = [],

		// Fila de dados de execução para listas repetíveis
		fila = [],

		// Índice de retorno de chamada atualmente disparado (modificado por adicionar/remover conforme necessário)
		índice de disparo = -1,

		// Acionar retornos de chamada
		fogo = function() {

			// Impõe disparo único
			bloqueado = bloqueado || opções.uma vez;

			// Executa callbacks para todas as execuções pendentes,
			// respeitando as substituições de fireIndex e alterações de tempo de execução
			disparado = disparando = verdadeiro;
			for ( ; queue.length; triggerIndex = -1 ) {
				memória = fila.shift();
				while ( ++fireIndex < list.length ) {

					// Executa o callback e verifica o término antecipado
					if ( list[ fireIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Pula para o final e esquece os dados para que .add não seja disparado novamente
						índice de disparo = lista.comprimento;
						memória = falso;
					}
				}
			}

			// Esqueça os dados se terminarmos com eles
			if (!opções.memória) {
				memória = falso;
			}

			disparo = falso;

			// Limpe se terminamos de atirar de vez
			if (bloqueado) {

				// Mantém uma lista vazia se tivermos dados para futuras chamadas de adição
				if (memória) {
					lista = [];

				// Caso contrário, este objeto é gasto
				} senão {
					lista = "";
				}
			}
		},

		// Objeto de retorno de chamada real
		eu = {

			// Adiciona um retorno de chamada ou uma coleção de retornos de chamada à lista
			adicione: função(){
				if (lista) {

					// Se tivermos memória de uma execução passada, devemos disparar após adicionar
					if (memória && !disparo) {
						índice de disparo = lista.comprimento - 1;
						fila.push(memória);
					}

					(função add(args){
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									lista.push(arg);
								}
							} else if (arg && arg.length && toType( arg) !== "string" ) {

								// Inspeciona recursivamente
								add(arg);
							}
						});
					} )( argumentos );

					if (memória && !disparo) {
						incêndio();
					}
				}
				devolva isso;
			},

			//Remove um callback da lista
			remover: function(){
				jQuery.each( argumentos, função( _, arg ) {
					índice var;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( índice, 1 );

						// Manipula índices de disparo
						if ( índice <= índice de disparo ) {
							índice de disparo--;
						}
					}
				});
				devolva isso;
			},

			// Verifica se um determinado callback está na lista.
			// Se nenhum argumento for fornecido, retorna se a lista tem ou não retornos de chamada anexados.
			tem: function(fn){
				retornar f?
					jQuery.inArray( fn, list ) > -1 :
					lista.comprimento > 0;
			},

			//Remove todos os callbacks da lista
			vazio: function() {
				if (lista) {
					lista = [];
				}
				devolva isso;
			},

			// Desativa .fire e .add
			// Aborta qualquer execução atual/pendente
			// Limpa todos os callbacks e valores
			desabilitar: function() {
				bloqueado = fila = [];
				lista = memória = "";
				devolva isso;
			},
			desabilitado: function() {
				return !lista;
			},

			// Desabilita .fire
			// Desabilite também .add a menos que tenhamos memória (já que não teria efeito)
			// Aborta quaisquer execuções pendentes
			bloqueio: função() {
				bloqueado = fila = [];
				if ( !memória && !disparando ) {
					lista = memória = "";
				}
				devolva isso;
			},
			bloqueado: function() {
				retornar !!bloqueado;
			},

			// Chama todos os callbacks com o contexto e argumentos fornecidos
			fireWith: function( context, args ) {
				if (!bloqueado) {
					argumentos = argumentos || [];
					args = [ contexto, args.slice ? args.slice() : args ];
					fila.push(args);
					if ( !disparando ) {
						incêndio();
					}
				}
				devolva isso;
			},

			// Chama todos os callbacks com os argumentos fornecidos
			fogo: function() {
				self.fireWith( this, argumentos );
				devolva isso;
			},

			// Para saber se os callbacks já foram chamados pelo menos uma vez
			disparado: function() {
				retornar !!disparado;
			}
		};

	retornar a si mesmo;
};


função Identidade(v){
	retornar v;
}
função Lançador(ex){
	jogar ex;
}

function adoptValue( valor, resolver, rejeitar, noValue ) {
	método var;

	tentar {

		// Verifique primeiro o aspecto da promessa para privilegiar o comportamento síncrono
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( valor ).done( resolver ).fail(rejeitar );

		// Outros entãoables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( valor, resolver, rejeitar );

		// Outros não-entíveis
		} senão {

			// Controla argumentos `resolve` deixando Array#slice converter boolean `noValue` para integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply(undefined, [ value ].slice( noValue ) );
		}

	// Para Promises/A+, converte exceções em rejeições
	// Como jQuery.when não desempacota os thenables, podemos pular as verificações extras que aparecem em
	// Deferred#then para suprimir a rejeição condicionalmente.
	} pegar ( valor ) {

		// Suporte: apenas Android 4.0
		// Funções de modo estrito invocadas sem .call/.apply obtêm contexto de objeto global
		rejeitar.apply( undefined, [ valor ] );
	}
}

jQuery.extend({

	Adiado: function(func) {
		var tuplas = [

				// ação, adiciona ouvinte, retornos de chamada,
				// ... .then manipuladores, índice de argumentos, [estado final]
				[ "notificar", "progresso", jQuery.Callbacks( "memória" ),
					jQuery.Callbacks( "memória"), 2 ],
				[ "resolver", "concluído", jQuery.Callbacks( "uma vez memória" ),
					jQuery.Callbacks( "uma vez memória" ), 0, "resolvido" ],
				[ "rejeitar", "falhar", jQuery.Callbacks( "uma vez memória"),
					jQuery.Callbacks( "uma vez memória"), 1, "rejeitado" ]
			],
			estado = "pendente",
			promessa = {
				função estatal() {
					estado de retorno;
				},
				sempre: function() {
					deferred.done( argumentos ).fail( argumentos );
					devolva isso;
				},
				"catch": function(fn){
					return promessa.then( null, fn );
				},

				// Mantém o pipe para retrocompatibilidade
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = argumentos;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuplas, function( _i, tupla ) {

							// Mapeia tuplas (progresso, feito, falha) para argumentos (feito, falha, progresso)
							var fn = isFunction( fns[ tupla[ 4 ] ] ) && fns[ tupla[ 4 ] ];

							// deferred.progress(function() { bind to newDefer ou newDefer.notify })
							// deferred.done(function() { bind to newDefer ou newDefer.resolve })
							// deferred.fail(function() { bind to newDefer ou newDefer.reject })
							deferred[ tupla[ 1 ] ]( function() {
								var return = fn && fn.apply( this, arguments );
								if ( return && isFunction( return.promise ) ) {
									devolvido.promessa()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} senão {
									newDefer[ tupla[ 0 ] + "Com" ](
										isto,
										fn? [retornado]: argumentos
									);
								}
							});
						});
						fn = nulo;
					} ).promessa();
				},
				então: function( onFulfilled, onRejected, onProgress ) {
					var maxProfundidade = 0;
					function resolve(profundidade, diferido, manipulador, especial) {
						função de retorno(){
							var isso = isso,
								argumentos = argumentos,
								mayThrow = function() {
									var retornou, então;

									// Suporte: Promessas/A+ seção 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignora tentativas de resolução dupla
									if (profundidade < maxDepth) {
										Retorna;
									}

									return = handler.apply( that, args );

									// Suporte: Promessas/A+ seção 2.3.1
									// https://promisesaplus.com/#point-48
									if (retornado === deferred.promise()) {
										throw new TypeError( "Ativar auto-resolução" );
									}

									// Suporte: Seções Promessas/A+ 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recupera `then` apenas uma vez
									então = retornou &&

										// Suporte: Promessas/A+ seção 2.3.4
										// https://promisesaplus.com/#point-64
										// Verifica apenas objetos e funções quanto à entabilidade
										( typeof retornado === "objeto" ||
											typeof retornado === "função" ) &&
										devolvido.então;

									// Manipula um thenable retornado
									if ( isFunction( then ) ) {

										// Processadores especiais (notificar) apenas aguarde a resolução
										if (especial) {
											então ligue(
												retornou,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Processadores normais (resolve) também se conectam ao progresso
										} senão {

											// ...e desconsidere os valores de resolução mais antigos
											maxProfundidade++;

											então ligue(
												retornou,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Manipula todos os outros valores retornados
									} senão {

										// Apenas manipuladores substitutos passam o contexto
										// e vários valores (comportamento não especificado)
										if ( handler !== Identity ) {
											que = indefinido;
											argumentos = [ retornado ];
										}

										// Processa o(s) valor(es)
										// O processo padrão é resolvido
										( especial || deferred.resolveWith )( that, args );
									}
								},

								// Somente processadores normais (resolve) capturam e rejeitam exceções
								processo = especial?
									mayThrow :
									função(){
										tentar {
											podeLançar();
										} pegar ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Suporte: Promessas/A+ seção 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignora exceções pós-resolução
											if (profundidade + 1 >= maxDepth) {

												// Apenas manipuladores substitutos passam o contexto
												// e vários valores (comportamento não especificado)
												if ( manipulador !== Lançador ) {
													que = indefinido;
													argumentos = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Suporte: Promessas/A+ seção 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolver promessas imediatamente para evitar falsas rejeições de
							// erros subsequentes
							if (profundidade) {
								processo();
							} senão {

								// Chama um gancho opcional para gravar a pilha, em caso de exceção
								// já que é perdido quando a execução é assíncrona
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( processo );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuplas[ 0 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction( onProgress ) ?
									em progresso :
									Identidade,
								novoDefer.notifyWith
							)
						);

						// fulfillment_handlers.add( ... )
						tuplas[ 1 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction( onFulfilled ) ?
									onCumprido:
									Identidade
							)
						);

						// rejeitado_handlers.add( ... )
						tuplas[ 2 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction( onRejected ) ?
									emRejeitado:
									Atirador
							)
						);
					} ).promessa();
				},

				// Obter uma promessa para este adiado
				// Se obj for fornecido, o aspecto da promessa é adicionado ao objeto
				promessa: function(obj) {
					return obj != null ? jQuery.extend(obj, promessa): promessa;
				}
			},
			adiado = {};

		// Adiciona métodos específicos de lista
		jQuery.each( tuplas, function( i, tupla ) {
			var lista = tupla[ 2 ],
				stateString = tupla[ 5 ];

			// promessa.progresso = lista.adicionar
			// promessa.feito = lista.adicionar
			// promessa.fail = list.add
			promessa[ tupla[ 1 ] ] = list.add;

			// Manipula o estado
			if (stateString) {
				lista.adicionar(
					função(){

						// estado = "resolvido" (ou seja, cumprido)
						// estado = "rejeitado"
						estado = estadoString;
					},

					// rejeitado_callbacks.disable
					// cumprida_callbacks.disable
					tuplas[ 3 - i ][ 2 ].disable,

					// rejeitado_handlers.disable
					// fulfillment_handlers.disable
					tuplas[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuplas[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuplas[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// preenchido_handlers.fire
			// rejeitado_handlers.fire
			list.add( tupla[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tupla[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				devolva isso;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tupla[ 0 ] + "Com" ] = list.fireWith;
		});

		// Faz do adiado uma promessa
		promessa.promessa( diferido);

		// Chama a função dada se houver
		if (fun) {
			func.call( adiado, adiado );
		}

		// Tudo feito!
		retorno adiado;
	},

	// Auxiliar adiado
	quando: function(singleValue) {
		var

			// contagem de subordinados incompletos
			restante = argumentos.comprimento,

			// contagem de argumentos não processados
			i = restante,

			// dados de atendimento subordinados
			resolveContexts = Array(i),
			resolveValues ​​= slice.call(argumentos),

			// o principal Diferido
			primário = jQuery.Deferred(),

			//fábrica de retorno de chamada subordinada
			atualizaçãoFunc = function(i){
				função de retorno (valor) {
					resolveContexts[i] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( argumentos ): valor;
					if ( !( --restante ) ) {
						primary.resolveWith( resolveContexts, resolveValues ​​);
					}
				};
			};

		// Argumentos simples e vazios são adotados como Promise.resolve
		if ( restante <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remanescente );

			// Use .then() para desembrulhar entables secundários (cf. gh-3000)
			if ( primary.state() === "pendente" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primário.então();
			}
		}

		// Vários argumentos são agregados como elementos de array Promise.all
		enquanto eu-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
});


// Estes geralmente indicam um erro do programador durante o desenvolvimento,
// avisa sobre eles o mais rápido possível ao invés de engoli-los por padrão.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function(erro, pilha) {

	// Suporte: IE 8 - 9 apenas
	// O console existe quando as ferramentas de desenvolvimento estão abertas, o que pode acontecer a qualquer momento
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function(erro) {
	window.setTimeout( function() {
		erro de lançamento;
	});
};




// O diferido usado no DOM pronto
var readyList = jQuery.Deferred();

jQuery.fn.ready = function(fn) {

	lista pronta
		.então( fn )

		// Envolva jQuery.readyException em uma função para que a pesquisa
		// acontece no momento do tratamento de erros em vez do retorno de chamada
		// cadastro.
		.catch(função(erro){
			jQuery.readyException(erro);
		});

	devolva isso;
};

jQuery.extend({

	// O DOM está pronto para ser usado? Defina como true quando ocorrer.
	isReady: falso,

	// Um ​​contador para rastrear quantos itens esperar antes
	// o evento pronto é acionado. Veja trac-6781
	prontoEspere: 1,

	// Manipula quando o DOM está pronto
	pronto: function( espera ) {

		// Aborta se houver retenções pendentes ou se já estivermos prontos
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			Retorna;
		}

		// Lembre-se que o DOM está pronto
		jQuery.isReady = true;

		// Se um evento DOM Ready normal for disparado, decrementa e espera se necessário
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			Retorna;
		}

		// Se houver funções vinculadas, para executar
		readyList.resolveWith( document, [ jQuery ] );
	}
});

jQuery.ready.then = readyList.then;

// O manipulador de eventos pronto e o método de autolimpeza
função completa() {
	document.removeEventListener( "DOMContentLoaded", concluído );
	window.removeEventListener( "carregar", concluído);
	jQuery.ready();
}

// Captura casos onde $(document).ready() é chamado
// após o evento do navegador já ter ocorrido.
// Suporte: IE <=9 - 10 apenas
// IE mais antigo às vezes sinaliza "interativo" cedo demais
if ( document.readyState === "completo" ||
	( document.readyState !== "carregando" && !document.documentElement.doScroll ) ) {

	// Lida com isso de forma assíncrona para permitir que os scripts tenham a oportunidade de ficar prontos para o atraso
	window.setTimeout( jQuery.ready );

} senão {

	// Use o callback de evento útil
	document.addEventListener( "DOMContentLoaded", concluído );

	// Um ​​fallback para window.onload, que sempre funcionará
	window.addEventListener("carregar", concluído);
}




// Método multifuncional para obter e definir valores de uma coleção
// O valor/s pode ser executado opcionalmente se for uma função
var access = function(elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		massa = chave == null;

	// Define muitos valores
	if (toType(key) === "objeto") {
		encadeável = verdadeiro;
		para (i na chave) {
			access(elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Define um valor
	} else if ( valor !== indefinido ) {
		encadeável = verdadeiro;

		if ( !isFunção( valor ) ) {
			bruto = verdadeiro;
		}

		if (em massa) {

			// Operações em massa são executadas em todo o conjunto
			if (bruto) {
				fn.call(elems, valor);
				fn = nulo;

			// ...exceto ao executar valores de função
			} senão {
				massa = fn;
				fn = function(elem, _key, value) {
					return bulk.call( jQuery( elem ), valor );
				};
			}
		}

		se (fn){
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						valor :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( encadeável ) {
		retornar elementos;
	}

	// Obtém
	if (em massa) {
		return fn.call(elems);
	}

	retornar len? fn( elems[ 0 ], chave ): vazioGet;
};


// Corresponde a string tracejada para camelização
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([az])/g;

// Usado por camelCase como callback para replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Converte tracejado para camelCase; usado pelos módulos css e de dados
// Suporte: IE <=9 - 11, Edge 12 - 15
// A Microsoft esqueceu de usar o prefixo do fornecedor (trac-9572)
function camelCase(string) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var aceitaDados = function(proprietário) {

	// Aceita apenas:
	// - Nó
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Objeto
	// - Algum
	return proprietário.nodeType === 1 || proprietário.nodeType === 9 || !( +proprietário.nodeType);
};




função Dados() {
	this.expando = jQuery.expando + Data.uid++;
}

Dados.uid = 1;

Data.prototype = {

	cache: function(proprietário) {

		// Verifica se o objeto dono já tem cache
		var valor = proprietário[ this.expando ];

		// Se não, cria um
		if ( !valor ) {
			valor = {};

			// Podemos aceitar dados para nós não elementares em navegadores modernos,
			// mas não devemos, veja trac-8335.
			// Sempre retorna um objeto vazio.
			if ( acceptData( proprietário ) ) {

				// Se for um nó improvável de ser stringificado ou em loop
				// usa atribuição simples
				if ( proprietário.nodeType ) {
					proprietário[ this.expando ] = valor;

				// Caso contrário, proteja-o em uma propriedade não enumerável
				// configurável deve ser verdadeiro para permitir que a propriedade seja
				// excluído quando os dados são removidos
				} senão {
					Object.defineProperty( proprietário, this.expando, {
						valor: valor,
						configurável: verdadeiro
					});
				}
			}
		}

		valor de retorno;
	},
	set: function( proprietário, dados, valor ) {
		var prop,
			cache = this.cache( proprietário );

		// Handle: [ proprietário, chave, valor ] args
		// Sempre use a chave camelCase (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase(dados)] = valor;

		// Manipular: [ proprietário, { propriedades } ] args
		} senão {

			// Copie as propriedades uma a uma para o objeto de cache
			for (prop in data) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		cache de retorno;
	},
	get: function( proprietário, chave ) {
		chave de retorno === indefinido?
			this.cache(proprietário):

			// Sempre use a chave camelCase (gh-2257)
			proprietário[ this.expando ] && proprietário[ this.expando ][ camelCase( key ) ];
	},
	access: function( proprietário, chave, valor ) {

		// Nos casos em que:
		//
		// 1. Nenhuma chave foi especificada
		// 2. Uma chave de string foi especificada, mas nenhum valor foi fornecido
		//
		// Pega o caminho "read" e permite que o método get determine
		// qual valor retornar, respectivamente:
		//
		// 1. Todo o objeto de cache
		// 2. Os dados armazenados na chave
		//
		if ( chave === indefinido ||
				( ( key && typeof key === "string") && value === undefined ) ) {

			return this.get( proprietário, chave );
		}

		// Quando a chave não é uma string, ou tanto uma chave quanto um valor
		// são especificados, definidos ou estendidos (objetos existentes) com:
		//
		// 1. Um objeto de propriedades
		// 2. Uma chave e um valor
		//
		this.set( proprietário, chave, valor );

		// Como o caminho "set" pode ter dois pontos de entrada possíveis
		// retorna os dados esperados com base em qual caminho foi tomado[*]
		valor de retorno !== indefinido ? valor : chave;
	},
	remove: function( proprietário, chave ) {
		var eu,
			cache = proprietário[ this.expando ];

		if (cache === indefinido) {
			Retorna;
		}

		if ( chave !== indefinido ) {

			// Suporta array ou string de chaves separadas por espaço
			if ( Array.isArray( chave ) ) {

				// Se a chave for um array de chaves...
				// Nós sempre configuramos as chaves camelCase, então remova isso.
				chave = key.map( camelCase );
			} senão {
				chave = camelCase( chave );

				// Se existir uma chave com os espaços, use-a.
				// Caso contrário, crie um array combinando não-espaço em branco
				chave = chave no cache?
					[ chave ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = chave.comprimento;

			enquanto eu-- ) {
				delete cache[ key[ i ] ];
			}
		}

		//Remove o expando se não houver mais dados
		if ( chave === indefinido || jQuery.isEmptyObject( cache ) ) {

			// Suporte: Chrome <=35 - 45
			// O desempenho do Webkit & Blink sofre ao excluir propriedades
			// de nós DOM, então defina como indefinido
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restrito)
			if ( proprietário.nodeType ) {
				proprietário[ this.expando ] = indefinido;
			} senão {
				excluir proprietário[ this.expando ];
			}
		}
	},
	hasData: function(proprietário) {
		var cache = proprietário[ this.expando ];
		return cache !== indefinido && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



// Resumo da Implementação
//
// 1. Aplique a superfície da API e a compatibilidade semântica com a ramificação 1.9.x
// 2. Melhore a capacidade de manutenção do módulo reduzindo o armazenamento
// caminhos para um único mecanismo.
// 3. Use o mesmo mecanismo único para dar suporte a dados "privados" e "usuários".
// 4. _Nunca_ expor dados "privados" ao código do usuário (TODO: Drop _data, _removeData)
// 5. Evite expor detalhes de implementação em objetos de usuário (por exemplo, propriedades expando)
// 6. Fornecer um caminho claro para a atualização de implementação para o WeakMap em 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[AZ]/g;

função getData(dados) {
	if (dados === "true") {
		retorne verdadeiro;
	}

	if (dados === "falso") {
		retorna falso;
	}

	if (dados === "null") {
		retornar nulo;
	}

	// Apenas converte para um número se não alterar a string
	if (dados === +dados + "" ) {
		retorno +dados;
	}

	if (rbrace.test(dados)) {
		return JSON.parse(dados);
	}

	dados de retorno;
}

function dataAttr(elem, key, data) {
	nome da var;

	// Se nada foi encontrado internamente, tente buscar qualquer
	// dados do atributo data-* HTML5
	if ( dados === indefinido && elem.nodeType === 1 ) {
		nome = "dados-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		dados = elem.getAttribute( nome );

		if ( typeof data === "string" ) {
			tentar {
				dados = getData(dados);
			} pegar ( e ) {}

			// Certifique-se de definir os dados para que não sejam alterados posteriormente
			dataUser.set(elem, chave, dados);
		} senão {
			dados = indefinido;
		}
	}
	dados de retorno;
}

jQuery.extend({
	hasData: function(elem){
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	dados: function(elem, nome, dados) {
		return dataUser.access(elem, name, data);
	},

	removeData: function(elem, nome) {
		dataUser.remove( elem, nome );
	},

	// TODO: Agora que todas as chamadas para _data e _removeData foram substituídas
	// com chamadas diretas para métodos dataPriv, eles podem ser obsoletos.
	_data: function(elem, nome, dados) {
		return dataPriv.access(elem, nome, dados);
	},

	_removeData: function(elem, nome) {
		dataPriv.remove( elem, nome );
	}
});

jQuery.fn.extend({
	dados: function(chave, valor) {
		var i, nome, dados,
			ele = this[ 0 ],
			attrs = elem && elem.attributes;

		// Obtém todos os valores
		if ( chave === indefinido ) {
			if ( this.length ) {
				dados = dataUser.get(elem);

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.comprimento;
					enquanto eu-- ) {

						// Suporte: apenas IE 11
						// Os elementos attrs podem ser nulos (trac-14894)
						if (attrs[i]){
							nome = attrs[i].nome;
							if ( name.indexOf( "data-" ) === 0 ) {
								nome = camelCase( nome.fatia( 5 ) );
								dataAttr( elem, nome, dados[ nome ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			dados de retorno;
		}

		// Define vários valores
		if ( typeof key === "objeto" ) {
			return this.each( function() {
				dataUser.set( this, key );
			});
		}

		return access( this, function( value ) {
			var dados;

			// O objeto jQuery chamado (elemento corresponde) não está vazio
			// (e, portanto, tem um elemento que aparece neste [ 0 ]) e o
			// O parâmetro `value` não foi indefinido. Um objeto jQuery vazio
			// resultará em `undefined` for elem = this[ 0 ] que irá
			// lança uma exceção se for feita uma tentativa de ler um cache de dados.
			if (elem && valor === indefinido) {

				// Tenta obter dados do cache
				// A chave sempre será camelCased em Data
				data = dataUser.get(elem, chave);
				if (dados!== indefinido) {
					dados de retorno;
				}

				// Tenta "descobrir" os dados em
				// dados personalizados HTML5-* attrs
				data = dataAttr(elem, chave);
				if (dados!== indefinido) {
					dados de retorno;
				}

				// Nós tentamos muito, mas os dados não existem.
				Retorna;
			}

			// Configura os dados...
			this.each( function() {

				// Sempre armazenamos a chave camelCased
				dataUser.set( this, key, value );
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function(chave) {
		return this.each( function() {
			dataUser.remove( this, key );
		});
	}
});


jQuery.extend({
	fila: function(elem, tipo, dados) {
		var fila;

		if (elem) {
			tipo = ( tipo || "fx" ) + "fila";
			fila = dataPriv.get(elem, tipo);

			// Acelera o desenfileiramento saindo rapidamente se for apenas uma pesquisa
			if (dados) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access(elem, type, jQuery.makeArray(data));
				} senão {
					queue.push(dados);
				}
			}
			fila de retorno || [];
		}
	},

	desenfileirar: function(elem, type) {
		tipo = tipo || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = fila.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			próximo = function() {
				jQuery.dequeue(elem, tipo);
			};

		// Se a fila fx for desenfileirada, sempre remova a sentinela de progresso
		if (fn === "em andamento") {
			fn = fila.shift();
			startLength--;
		}

		se (fn){

			// Adiciona um sentinela de progresso para evitar que a fila fx seja
			// automaticamente desenfileirado
			if ( tipo === "fx" ) {
				queue.unshift( "em andamento" );
			}

			// Limpa a última função de parada da fila
			delete hooks.stop;
			fn.call( elem, next, ganchos );
		}

		if (!startLength && ganchos) {
			ganchos.vazio.fogo();
		}
	},

	// Não público - gera um objeto queueHooks ou retorna o atual
	_queueHooks: function(elem, type) {
		var key = type + "queueHooks";
		return dataPriv.get(elem, chave) || dataPriv.access(elem, chave, {
			vazio: jQuery.Callbacks( "uma vez memória" ).add( function() {
				dataPriv.remove( elem, [ tipo + "fila", chave ] );
			})
		});
	}
});

jQuery.fn.extend({
	fila: function( tipo, dados ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			dados = tipo;
			tipo = "fx";
			normatizador--;
		}

		if (argumentos.comprimento < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		dados de retorno === indefinido?
			isto :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Garante um gancho para esta fila
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	desenfileirar: function(tipo){
		return this.each( function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Obtém uma promessa resolvida quando filas de um determinado tipo
	// são esvaziados (fx é o tipo por padrão)
	promessa: function( tipo, obj ) {
		var tmp,
			contagem = 1,
			adiar = jQuery.Deferred(),
			elementos = isso,
			i = este.comprimento,
			resolver = function() {
				if ( !( --conta ) ) {
					defer.resolveWith( elementos, [ elementos ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = tipo;
			tipo = indefinido;
		}
		tipo = tipo || "fx";

		enquanto eu-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if (tmp && tmp.empty) {
				contagem++;
				tmp.empty.add( resolver );
			}
		}
		resolver();
		return defer.promise( obj );
	}
});
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = [ "Superior", "Direita", "Inferior", "Esquerda" ];

var documentElement = document.documentElement;



	var isAttached = function(elem) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composto = { composto: verdadeiro };

	// Suporte: IE 9 - 11+, Edge 12 - 18+, apenas iOS 10.0 - 10.2
	// Verifique o anexo nos limites do Shadow DOM quando possível (gh-3504)
	// Suporte: apenas iOS 10.0-10.2
	// As primeiras versões do iOS 10 suportam `attachShadow` mas não `getRootNode`,
	// levando a erros. Precisamos verificar se há `getRootNode`.
	if (documentElement.getRootNode) {
		isAnexado = function(elem){
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composto ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function(elem, el) {

		// isHiddenWithinTree pode ser chamado da função jQuery#filter;
		// nesse caso, o elemento será o segundo argumento
		ele = ele || ele;

		// O estilo inline supera tudo
		return elem.style.display === "nenhum" ||
			elem.style.display === "" &&

			// Caso contrário, verifica o estilo computado
			// Suporte: Firefox <=43 - 45
			// Elementos desconectados podem ter display calculado: none, então primeiro confirme que elem é
			// no documento.
			isAttached(elem) &&

			jQuery.css( elem, "exibir" ) === "nenhum";
	};



function ajusteCSS(elem, prop, valueParts, tween) {
	var ajustado, escala,
		maxIterações = 20,
		valor atual = interpolação ?
			função(){
				return interpolação.cur();
			} :
			função(){
				return jQuery.css(elem, prop, "");
			},
		inicial = valor atual(),
		unidade = valorPartes && valorPartes[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// O cálculo do valor inicial é necessário para possíveis incompatibilidades de unidades
		inicialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unidade !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( inicialInUnit && inicialInUnit[ 3 ] !== unidade ) {

		// Suporte: Firefox <=54
		// Reduzir pela metade o valor de destino da iteração para evitar interferência dos limites superiores do CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades de confiança relatadas por jQuery.css
		unidade = unidade || inicialInUnit[ 3 ];

		// Aproxima iterativamente de um ponto inicial diferente de zero
		inicialInUnit = +inicial || 1;

		while ( maxIterações-- ) {

			// Avaliar e atualizar nosso melhor palpite (duplicando palpites que zeram).
			// Termina se a escala for igual ou cruzar 1 (tornando o produto antigo*novo não positivo).
			jQuery.style(elem, prop, inicialInUnit + unidade);
			if ( ( 1 - escala ) * ( 1 - ( escala = valor atual() / inicial || 0,5 ) ) <= 0 ) {
				maxIterações = 0;
			}
			inicialInUnit = inicialInUnit/escala;

		}

		inicialInUnit = inicialInUnit * 2;
		jQuery.style(elem, prop, inicialInUnit + unidade);

		// Certifique-se de atualizar as propriedades de interpolação mais tarde
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		inicialInUnit = +initialInUnit || +inicial || 0;

		// Aplicar deslocamento relativo (+=/-=) se especificado
		ajustado = valueParts[ 1 ] ?
			inicialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valorPartes[ 2 ];
		if (interpolação) {
			interpolação.unidade = unidade;
			tween.start = inicialInUnit;
			tween.end = ajustado;
		}
	}
	retorno ajustado;
}


var defaultDisplayMap = {};

function getDefaultDisplay(elem) {
	var temperatura,
		doc = elem.proprietárioDocumento,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if (exibir) {
		exibição de retorno;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css(temp, "display");

	temp.parentNode.removeChild( temp );

	if ( display === "nenhum" ) {
		exibição = "bloco";
	}
	defaultDisplayMap[ nodeName ] = display;

	exibição de retorno;
}

function showHide( elementos, show ) {
	var display, elem,
		valores = [],
		índice = 0,
		comprimento = elementos.comprimento;

	// Determina o novo valor de exibição para elementos que precisam ser alterados
	for ( ; índice < comprimento; índice++ ) {
		elem = elementos[ índice ];
		if (!elem.style) {
			Prosseguir;
		}

		display = elem.style.display;
		se (mostrar) {

			// Como forçamos a visibilidade de elementos ocultos em cascata, uma ação imediata (e lenta)
			// a verificação é necessária neste primeiro loop, a menos que tenhamos um valor de exibição não vazio (ou
			// embutido ou prestes a ser restaurado)
			if ( display === "nenhum" ) {
				valores[ índice ] = dataPriv.get( elem, "exibir" ) || nulo;
				if ( !valores[ índice ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				valores[ índice ] = getDefaultDisplay( elem );
			}
		} senão {
			if ( display !== "nenhum" ) {
				valores[índice] = "nenhum";

				// Lembre-se do que estamos substituindo
				dataPriv.set(elem, "exibir", exibir);
			}
		}
	}

	// Configura a exibição dos elementos em um segundo loop para evitar refluxo constante
	for ( índice = 0; índice < comprimento; índice++ ) {
		if ( valores[ índice ] != null ) {
			elementos[ índice ].style.display = valores[ índice ];
		}
	}

	elementos de retorno;
}

jQuery.fn.extend({
	mostre: função(){
		return showHide( this, true );
	},
	esconder: função() {
		return showHide( this );
	},
	alternar: function(estado) {
		if ( tipo de estado === "boolean" ) {
			estado de retorno? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} senão {
				jQuery( this ).hide();
			}
		});
	}
});
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i);



(função(){
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div") ),
		entrada = document.createElement( "entrada" );

	// Suporte: apenas Android 4.0 - 4.3
	// Verifica o estado perdido se o nome estiver definido (trac-11217)
	// Suporte: Windows Web Apps (WWA)
	// `name` e `type` devem usar .setAttribute para WWA (trac-14901)
	input.setAttribute( "tipo", "rádio" );
	input.setAttribute( "marcado", "marcado" );
	input.setAttribute( "nome", "t" );

	div.appendChild(entrada);

	// Suporte: apenas Android <=4.1
	// WebKit mais antigo não clona o estado verificado corretamente em fragmentos
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Suporte: IE <=11 apenas
	// Certifique-se de que a área de texto (e caixa de seleção) defaultValue esteja clonada corretamente
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Suporte: IE <=9 apenas
	// IE <=9 substitui as tags <option> pelo seu conteúdo quando inseridas fora de
	// o elemento selecionado.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// Temos que fechar essas tags para suportar XHTML (trac-13200)
var wrapMapa = {

	// Os analisadores XHTML não inserem magicamente elementos no
	// da mesma forma que os analisadores de sopa de tags fazem. Então não podemos encurtar
	// isso omitindo <tbody> ou outros elementos obrigatórios.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_padrão: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Suporte: IE <=9 apenas
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll(contexto, tag) {

	// Suporte: IE <=9 - 11 apenas
	// Use typeof para evitar a invocação de método de argumento zero em objetos host (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} senão {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge([contexto],ret);
	}

	retorno ret;
}


// Marca os scripts como já avaliados
function setGlobalEval(elems, refElements) {
	var i = 0,
		l = elems.comprimento;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ eu ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elementos, contexto, scripts, seleção, ignorado ) {
	var elem, tmp, tag, wrap, attach, j,
		fragment = context.createDocumentFragment(),
		nós = [],
		e = 0,
		l = elems.comprimento;

	for ( ; i < l; i++ ) {
		ele = elems[i];

		if (elem ||elem === 0){

			// Adiciona nós diretamente
			if (toType(elem) === "objeto") {

				// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
				// push.apply(_, arraylike) lança no antigo WebKit
				jQuery.merge( nós, elem.nodeType ? [ elem ] : elem );

			// Converte não-html em um nó de texto
			} else if (!rhtml.test(elem)) {
				nodes.push( context.createTextNode( elem ) );

			// Converte html em nós DOM
			} senão {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Desserializar uma representação padrão
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Desce pelos wrappers até o conteúdo certo
				j = envolver[0];
				enquanto (j--) {
					tmp = tmp.lastChild;
				}

				// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
				// push.apply(_, arraylike) lança no antigo WebKit
				jQuery.merge(nós, tmp.childNodes);

				// Lembre-se do contêiner de nível superior
				tmp = fragment.firstChild;

				// Certifique-se de que os nós criados sejam órfãos (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	//Remove o wrapper do fragmento
	fragment.textContent = "";

	i = 0;
	while((elem=nós[i++])){

		// Ignora elementos já na coleção de contexto (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if (ignorado) {
				ignorado.push(elem);
			}
			Prosseguir;
		}

		anexado = isAttached(elem);

		//Anexa ao fragmento
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserva o histórico de avaliação do script
		se (em anexo) {
			setGlobalEval(tmp);
		}

		// Captura executáveis
		if ( scripts ) {
			j = 0;
			while((elem=tmp[j++])){
				if (rscriptType.test(elem.type || "")) {
					scripts.push(elem);
				}
			}
		}
	}

	fragmento de retorno;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

função returnTrue() {
	retorne verdadeiro;
}

function returnFalse() {
	retorna falso;
}

// Suporte: IE <=9 - 11+
// focus() e blur() são assíncronos, exceto quando não são operacionais.
// Então espere que o foco seja síncrono quando o elemento já estiver ativo,
// e blur para ser síncrono quando o elemento ainda não estiver ativo.
// (foco e desfoque são sempre síncronos em outros navegadores suportados,
// isso apenas define quando podemos contar com isso).
function expectSync(elem, type) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Suporte: IE <=9 apenas
// Acessar document.activeElement pode lançar inesperadamente
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	tentar {
		return document.activeElement;
	} pegar (err) { }
}

function on(elem, types, selector, data, fn, one ) {
	var origem, tipo;

	// Os tipos podem ser um mapa de tipos/manipuladores
	if ( tipo de tipos === "objeto" ) {

		// ( tipos-objeto, seletor, dados )
		if ( typeof selector !== "string" ) {

			// (tipos-objeto, dados)
			dados = dados || seletor;
			seletor = indefinido;
		}
		for (digite tipos) {
			on(elem, type, selector, data, types[ type ], one );
		}
		retornar ele;
	}

	if (dados == null && fn == null ) {

		// (tipos, fn)
		fn = seletor;
		dados = seletor = indefinido;
	} else if ( fn == null ) {
		if ( typeof seletor === "string" ) {

			// ( tipos, seletor, fn )
			fn = dados;
			dados = indefinido;
		} senão {

			// (tipos, dados, fn)
			fn = dados;
			dados = seletor;
			seletor = indefinido;
		}
	}
	if (fn === falso){
		fn = retornoFalso;
	} senão if ( !fn ) {
		retornar ele;
	}

	if ( um === 1 ) {
		origFn = fn;
		fn = function(evento){

			// Pode usar um conjunto vazio, pois o evento contém a informação
			jQuery().off( event );
			return origFn.apply( this, argumentos );
		};

		// Use o mesmo guid para que o chamador possa remover usando origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	});
}

/*
 * Funções auxiliares para gerenciar eventos -- não fazem parte da interface pública.
 * Adereços à biblioteca addEvent de Dean Edwards para muitas das idéias.
 */
jQuery.event = {

	global: {},

	add: function(elem, types, handler, data, selector) {

		var handleObjIn, eventHandle, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.get(elem);

		// Apenas anexa eventos a objetos que aceitam dados
		if (!acceptData(elem)) {
			Retorna;
		}

		// O chamador pode passar um objeto de dados personalizados no lugar do manipulador
		if ( handler.handler ) {
			handleObjIn = manipulador;
			manipulador = handleObjIn.handler;
			seletor = handleObjIn.selector;
		}

		// Garante que seletores inválidos lancem exceções no momento da anexação
		// Avalia em relação a documentElement caso elem seja um nó não elemento (por exemplo, document)
		if (seletor) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Certifique-se de que o manipulador tenha um ID exclusivo, usado para encontrá-lo/removê-lo posteriormente
		if (!handler.guid) {
			handler.guid = jQuery.guid++;
		}

		// Inicia a estrutura de eventos e o manipulador principal do elemento, se este for o primeiro
		if (!(eventos = elemData.events)) {
			eventos = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Descarta o segundo evento de um jQuery.event.trigger() e
				// quando um evento é chamado após o descarregamento de uma página
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ): undefined;
			};
		}

		// Manipula vários eventos separados por um espaço
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [""];
		t = tipos.comprimento;
		enquanto (t--) {
			tmp = rtypenamespace.exec( tipos[ t ] ) || [];
			tipo = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Deve haver um tipo, sem anexar manipuladores somente de namespace
			if ( !tipo ) {
				Prosseguir;
			}

			// Se o evento mudar de tipo, use os manipuladores de eventos especiais para o tipo alterado
			especial = jQuery.event.special[ tipo ] || {};

			// Se o seletor estiver definido, determina o tipo de api de evento especial, caso contrário, determinado tipo
			type = ( selector ? special.delegateType : special.bindType ) || modelo;

			// Atualização especial com base no tipo de redefinição recente
			especial = jQuery.event.special[ tipo ] || {};

			// handleObj é passado para todos os manipuladores de eventos
			handleObj = jQuery.extend({
				tipo: tipo,
				origType: origType,
				dados: dados,
				manipulador: manipulador,
				guid: handler.guid,
				seletor: seletor,
				needContext: seletor && jQuery.expr.match.needsContext.test(seletor),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Inicia a fila do manipulador de eventos se formos os primeiros
			if (!( handlers = events[ type ] ) ) {
				manipuladores = eventos[ tipo ] = [];
				handlers.delegateCount = 0;

				// Só use addEventListener se o manipulador de eventos especiais retornar false
				if (!special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if (elem.addEventListener) {
						elem.addEventListener( tipo, eventHandle );
					}
				}
			}

			if ( especial. adicionar ) {
				special.add.call( elem, handleObj );

				if (!handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Adiciona à lista de manipuladores do elemento, delegados na frente
			if (seletor) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} senão {
				handlers.push( handleObj );
			}

			// Acompanhe quais eventos já foram usados, para otimização de eventos
			jQuery.event.global[ tipo ] = true;
		}

	},

	// Desanexar um evento ou conjunto de eventos de um elemento
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if (!elemData || !(eventos = elemData.events)) {
			Retorna;
		}

		// Uma vez para cada type.namespace em types; tipo pode ser omitido
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [""];
		t = tipos.comprimento;
		enquanto (t--) {
			tmp = rtypenamespace.exec( tipos[ t ] ) || [];
			tipo = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Desvincula todos os eventos (neste namespace, se fornecido) para o elemento
			if ( !tipo ) {
				for (digite eventos) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				Prosseguir;
			}

			especial = jQuery.event.special[ tipo ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || modelo;
			manipuladores = eventos[ tipo ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			//Remover eventos correspondentes
			origCount = j = handlers.length;
			enquanto (j--) {
				handleObj = manipuladores[j];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !seletor || seletor === handleObj.selector ||
						seletor === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( especial.remover ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove o manipulador de eventos genérico se removemos algo e não existem mais manipuladores
			// (evita potencial para recursão infinita durante a remoção de manipuladores de eventos especiais)
			if ( origCount && !handlers.length ) {
				if (!special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				excluir eventos[tipo];
			}
		}

		// Remove os dados e o expando se não for mais usado
		if (jQuery.isEmptyObject(eventos)) {
			dataPriv.remove( elem, "lidar com eventos" );
		}
	},

	despacho: function(nativeEvent) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array(argumentos.comprimento),

			// Cria um jQuery.Event gravável a partir do objeto de evento nativo
			evento = jQuery.event.fix( nativeEvent ),

			manipuladores = (
				dataPriv.get( this, "eventos" ) || Object.create( null )
			)[ event.type ] || [],
			especial = jQuery.event.special[ event.type ] || {};

		// Use o jQuery.Event corrigido em vez do evento nativo (somente leitura)
		args[ 0 ] = evento;

		for ( i = 1; i < argumentos.comprimento; i++ ) {
			args[i] = argumentos[i];
		}

		event.delegateTarget = this;

		// Chama o gancho preDispatch para o tipo mapeado e deixa-o saltar se desejar
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			Retorna;
		}

		// Determina os manipuladores
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Execute os delegados primeiro; eles podem querer parar a propagação abaixo de nós
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Se o evento tiver namespace, cada manipulador só será invocado se for
				// especialmente universal ou seus namespaces são um superconjunto dos eventos.
				if (!event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if (ret!== indefinido) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Chama o gancho postDispatch para o tipo mapeado
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	manipuladores: function(evento, manipuladores) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = evento.destino;

		// Localiza manipuladores de delegados
		if ( delegateCount &&

			// Suporte: IE <=9
			// Árvores de instância SVG de buraco negro <use> (trac-13180)
			cur.nodeType &&

			// Suporte: Firefox <=42
			// Suprime cliques que violam especificações indicando um botão de ponteiro não primário (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Suporte: apenas IE 11
			// ...mas não "cliques" de teclas de seta de entradas de rádio, que podem ter `button` -1 (gh-2343)
			!( event.type === "clique" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Não verifica não-elementos (trac-13208)
				// Não processa cliques em elementos desabilitados (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "clique" && cur.disabled === true ) ) {
					manipuladores combinados = [];
					seletores correspondidos = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = manipuladores[i];

						// Não entra em conflito com as propriedades Object.prototype (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							MatchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Adiciona os manipuladores restantes (ligados diretamente)
		cur = isso;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function(nome, gancho) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerável: verdadeiro,
			configurável: verdadeiro,

			get: isFunction( gancho ) ?
				função(){
					if ( this.originalEvent ) {
						return gancho( this.originalEvent );
					}
				} :
				função(){
					if ( this.originalEvent ) {
						return this.originalEvent[ nome ];
					}
				},

			set: function(valor){
				Object.defineProperty( this, name, {
					enumerável: verdadeiro,
					configurável: verdadeiro,
					gravável: verdadeiro,
					valor: valor
				});
			}
		});
	},

	correção: function(originalEvent) {
		return originalEvent[ jQuery.expando ] ?
			evento original:
			new jQuery.Event(originalEvent);
	},

	especial: {
		carregar: {

			// Impede que eventos image.load acionados borbulhem para window.load
			noBubble: verdadeiro
		},
		clique: {

			// Utiliza evento nativo para garantir o estado correto para entradas verificáveis
			configuração: função(dados){

				// Para compressibilidade mútua com _default, substitua o acesso `this` por uma var local.
				// `|| data` é um código morto destinado apenas a preservar a variável por meio da minificação.
				var el = este || dados;

				// Reivindique o primeiro manipulador
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "clique", ... )
					alavancaNative( el, "clique", returnTrue );
				}

				// Retorna false para permitir o processamento normal no chamador
				retorna falso;
			},
			gatilho: função(dados){

				// Para compressibilidade mútua com _default, substitua o acesso `this` por uma var local.
				// `|| data` é um código morto destinado apenas a preservar a variável por meio da minificação.
				var el = este || dados;

				// Força a configuração antes de acionar um clique
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					alavancaNative( el, "clique" );
				}

				// Retorna não falso para permitir a propagação normal do caminho do evento
				retorne verdadeiro;
			},

			// Para consistência entre navegadores, suprima .click() nativo nos links
			// Evite também se estivermos dentro de uma pilha de eventos nativos alavancados
			_default: function(evento){
				var alvo = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( alvo, "clique" ) ||
					nodeName( alvo, "a" );
			}
		},

		antes de descarregar: {
			postDispatch: function(evento) {

				// Suporte: Firefox 20+
				// O Firefox não alerta se o campo returnValue não estiver definido.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Garante a presença de um ouvinte de eventos que trata acionado manualmente
// eventos sintéticos interrompendo o progresso até que seja invocado novamente em resposta a
// eventos *nativos* que ele dispara diretamente, garantindo que as mudanças de estado tenham
// já ocorreu antes de outros listeners serem chamados.
function alavancagemNative( el, type, expectSync ) {

	// Faltando o expectSync indica uma chamada de gatilho, que deve forçar a configuração por meio de jQuery.event.add
	if (!expectSync) {
		if ( dataPriv.get( el, tipo ) === undefined ) {
			jQuery.event.add( el, tipo, returnTrue );
		}
		Retorna;
	}

	// Registra o controlador como um manipulador universal especial para todos os namespaces de eventos
	dataPriv.set( el, tipo, false );
	jQuery.event.add( el, tipo, {
		namespace: falso,
		manipulador: function(evento) {
			var notAsync, resultado,
				salvo = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrompe o processamento do evento sintético externo .trigger()ed
				// Os dados salvos devem ser falsos nesses casos, mas podem ser um objeto de captura restante
				// de um manipulador nativo assíncrono (gh-4350)
				if (!saved.length) {

					// Armazena argumentos para uso ao manipular o evento nativo interno
					// Sempre haverá pelo menos um argumento (um objeto de evento), então este array
					// não será confundido com um objeto de captura restante.
					salvo = slice.call( argumentos );
					dataPriv.set( this, type, saved );

					// Aciona o evento nativo e captura seu resultado
					// Suporte: IE <=9 - 11+
					// focus() e blur() são assíncronos
					notAsync = expectSync( this, type );
					esse tipo ]();
					resultado = dataPriv.get( this, type );
					if ( salvo !== resultado || notAsync ) {
						dataPriv.set( this, type, false );
					} senão {
						resultado = {};
					}
					if ( salvo !== resultado ) {

						// Cancela o evento sintético externo
						event.stopImmediatePropagation();
						event.preventDefault();

						// Suporte: Chrome 86+
						// No Chrome, se um elemento com um manipulador de foco for desfocado por
						// clicando fora dele, ele invoca o manipulador de forma síncrona. Se
						// esse manipulador chama `.remove()` no elemento, os dados são limpos,
						// deixando `resultado` indefinido. Precisamos nos precaver contra isso.
						retornar resultado && resultado.valor;
					}

				// Se este for um evento sintético interno para um evento com um substituto borbulhante
				// (foco ou desfoque), suponha que o substituto já se propagou ao acionar o
				// evento nativo e evitar que isso aconteça novamente aqui.
				// Isso tecnicamente deixa a ordenação errada wrt para `.trigger()` (no qual o
				// substituto borbulhante propaga *depois* da base não borbulhante), mas isso parece
				// menos ruim que a duplicação.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// Se este for um evento nativo acionado acima, tudo agora está em ordem
			// Dispara um evento sintético interno com os argumentos originais
			} else if ( salvo.comprimento ) {

				// ...e captura o resultado
				dataPriv.set( this, type, {
					valor: jQuery.event.trigger(

						// Suporte: IE <=9 - 11+
						// Estenda com o protótipo para redefinir o stopImmediatePropagation() acima
						jQuery.extend( salvo[ 0 ], jQuery.Event.prototype ),
						salvo.fatia( 1 ),
						isto
					)
				});

				// Aborta o tratamento do evento nativo
				event.stopImmediatePropagation();
			}
		}
	});
}

jQuery.removeEvent = function(elem, type, handle ) {

	// Este "if" é necessário para objetos simples
	if (elem.removeEventListener) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Permitir instanciação sem a palavra-chave 'new'
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// objeto de evento
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Eventos borbulhando no documento podem ter sido marcados como prevenidos
		// por um manipulador mais abaixo na árvore; refletem o valor correto.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === indefinido &&

				// Suporte: apenas Android <=2.3
				src.returnValue === false ?
			returnTrue:
			retorna falso;

		// Cria propriedades de destino
		// Suporte: Safari <=6 - 7 apenas
		// O destino não deve ser um nó de texto (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Tipo de evento
	} senão {
		this.type = src;
	}

	// Coloca as propriedades fornecidas explicitamente no objeto de evento
	if ( adereços ) {
		jQuery.extend( this, props );
	}

	// Cria um timestamp se o evento de entrada não tiver um
	this.timeStamp = src && src.timeStamp || Data.agora();

	// Marca como fixo
	this[ jQuery.expando ] = true;
};

// jQuery.Event é baseado em eventos DOM3 conforme especificado pela ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	construtor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulado: falso,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Inclui todos os adereços de eventos comuns, incluindo adereços específicos de KeyEvent e MouseEvent
jQuery.each({
	AltKey: verdadeiro,
	bolhas: verdade,
	cancelável: verdadeiro,
	alteradoToques: verdadeiro,
	ctrlKey: true,
	detalhe: verdade,
	eventPhase: true,
	metaKey: true,
	páginaX: verdadeiro,
	páginaY: verdade,
	shiftKey: verdadeiro,
	ver: verdade,
	"char": verdadeiro,
	código: verdadeiro,
	charCode: true,
	chave: verdade,
	código-chave: verdadeiro,
	botão: verdadeiro,
	botões: verdadeiro,
	clienteX: verdadeiro,
	clienteY: verdade,
	offsetX: verdadeiro,
	offsetY: verdadeiro,
	pointerId: verdadeiro,
	pointerType: verdadeiro,
	telaX: verdadeiro,
	telaY: verdade,
	targetTouches: true,
	toElement: true,
	toques: verdade,
	que: verdade
}, jQuery.event.addProp );

jQuery.each( {focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ tipo ] = {

		// Utilize o evento nativo, se possível, para que a sequência de desfoque/foco esteja correta
		configuração: função() {

			// Reivindique o primeiro manipulador
			// dataPriv.set( this, "foco", ... )
			// dataPriv.set( this, "borrão", ... )
			alavancaNative( this, type, expectSync );

			// Retorna false para permitir o processamento normal no chamador
			retorna falso;
		},
		gatilho: function() {

			// Força a configuração antes do gatilho
			alavancaNative( this, type );

			// Retorna não falso para permitir a propagação normal do caminho do evento
			retorne verdadeiro;
		},

		// Suprime o foco nativo ou desfoque se estivermos dentro
		// uma pilha de eventos nativos alavancada
		_default: function(evento){
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};
});

// Cria eventos mouseenter/leave usando verificações de mouseover/out e event-time
// para que a delegação de eventos funcione no jQuery.
// Faça o mesmo para pointerenter/pointerleave e pointerover/pointerout
//
// Suporte: apenas Safari 7
// Safari envia mouseenter com muita frequência; Vejo:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// para a descrição do bug (ele também existia em versões mais antigas do Chrome).
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "ponteiro",
	pointerleave: "pointerout"
}, function(origem, correção) {
	jQuery.event.special[origem] = {
		delegateType: correção,
		bindType: correção,

		handle: function(evento){
			var ret,
				alvo = isso,
				relacionado = event.relatedTarget,
				handleObj = event.handleObj;

			// Para mouseenter/leave chama o manipulador se relacionado estiver fora do alvo.
			// NB: Sem relatedTarget se o mouse saiu/entrou na janela do navegador
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			retorno ret;
		}
	};
});

jQuery.fn.extend({

	on: function( tipos, seletor, dados, fn ) {
		return on( this, types, selector, data, fn );
	},
	um: function( tipos, seletor, dados, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( tipos, seletor, fn ) {
		var handleObj, tipo;
		if ( types && types.preventDefault && types.handleObj ) {

			// (evento) despachado jQuery.Event
			handleObj = tipos.handleObj;
			jQuery( tipos.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			devolva isso;
		}
		if ( tipo de tipos === "objeto" ) {

			// ( tipos-objeto [, seletor] )
			for (digite tipos) {
				this.off( tipo, seletor, tipos[ tipo ] );
			}
			devolva isso;
		}
		if ( seletor === false || typeof seletor === "função" ) {

			// (tipos [, fn] )
			fn = seletor;
			seletor = indefinido;
		}
		if (fn === falso){
			fn = retornoFalso;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	}
});


var

	// Suporte: IE <=10 - 11, apenas Edge 12 - 13
	// No IE/Edge, usar grupos regex aqui causa lentidão severa.
	// Consulte https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<estilo|<link/i,

	//checked="checked" ou verificado
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefere um tbody sobre sua tabela pai para conter novas linhas
função manipulaçãoTarget(elem, conteúdo) {
	if ( nodeName( elem, "tabela") &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || ele;
	}

	retornar ele;
}

// Substitui/restaura o atributo type dos elementos de script para manipulação segura do DOM
function disableScript(elem){
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	retornar ele;
}
function restoreScript(elem){
	if ( ( elem.type || "") .slice( 0, 5 ) === "true/" ) {
		tipo.elem = tipo.elem.fatia( 5 );
	} senão {
		elem.removeAttribute( "tipo" );
	}

	retornar ele;
}

function cloneCopyEvent( src, dest ) {
	var i, l, tipo, pdataOld, udataOld, udataCur, eventos;

	if ( dest.nodeType !== 1 ) {
		Retorna;
	}

	// 1. Copiar dados privados: eventos, manipuladores, etc.
	if (dataPriv.hasData(src)) {
		pdataOld = dataPriv.get(src);
		eventos = pdataOld.events;

		if (eventos) {
			dataPriv.remove( dest, "lidar com eventos" );

			for (digite eventos) {
				for ( i = 0, l = eventos[ tipo ]. comprimento; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][i ] );
				}
			}
		}
	}

	// 2. Copie os dados do usuário
	if (dataUser.hasData(src)) {
		udataOld = dataUser.access(src);
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Corrige bugs do IE, veja testes de suporte
function fixInput(src, dest) {
	var nodeName = dest.nodeName.toLowerCase();

	// Falha ao persistir o estado marcado de uma caixa de seleção ou botão de opção clonado.
	if ( nodeName === "input" && rcheckableType.test(src.type)) {
		dest.checked = src.checked;

	// Falha ao retornar a opção selecionada ao estado selecionado padrão ao clonar opções
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( coleção, argumentos, retorno de chamada, ignorado ) {

	// Achata quaisquer arrays aninhados
	args = flat(args);

	var fragment, first, scripts, hasScripts, node, doc,
		e = 0,
		l = coleção.comprimento,
		iNoClone = l - 1,
		valor = args[ 0 ],
		valueIsFunction = isFunction( value );

	// Não podemos clonar fragmentos do Node que contenham check, no WebKit
	if ( valorÉFunção ||
			( l > 1 && tipo de valor === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return coleção.cada(função(índice){
			var self = coleção.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignorado );
		});
	}

	se (l){
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignorado );
		primeiro = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragmento = primeiro;
		}

		// Requer um novo conteúdo ou interesse em elementos ignorados para invocar o retorno de chamada
		if (primeiro || ignorado) {
			scripts = jQuery.map( getAll( fragmento, "script" ), disableScript );
			hasScripts = scripts.length;

			// Usa o fragmento original para o último item
			// em vez do primeiro porque pode acabar
			// sendo esvaziado incorretamente em determinadas situações (trac-8070).
			for ( ; i < l; i++ ) {
				nó = fragmento;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Mantém referências a scripts clonados para restauração posterior
					if ( hasScripts ) {

						// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
						// push.apply(_, arraylike) lança no antigo WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( coleção[ i ], nó, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reativar scripts
				jQuery.map( scripts, restoreScript );

				// Avalia scripts executáveis ​​na primeira inserção de documento
				for ( i = 0; i < hasScripts; i++ ) {
					nó = scripts[i];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, nó ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase() !== "module" ) {

							// Dependência AJAX opcional, mas não executará scripts se não estiver presente
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute("nonce")
								}, doc);
							}
						} senão {

							// Desempacota uma seção CDATA contendo o conteúdo do script. Isso não deveria ser
							// necessário, pois em documentos XML eles já não são visíveis quando
							// inspecionando o conteúdo do elemento e em documentos HTML eles não têm
							// significado, mas estamos preservando essa lógica para compatibilidade com versões anteriores.
							// Isso será removido completamente na versão 4.0. Consulte gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	cobrança de retorno;
}

function remove(elem, selector, keepData) {
	var nó,
		nós = seletor? jQuery.filter( selector, elem ): elem,
		i = 0;

	for ( ; ( nó = nós[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	retornar ele;
}

jQuery.extend({
	htmlPrefilter: function(html){
		retornar html;
	},

	clone: ​​function(elem, dataAndEvents, deepDataAndEvents) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached(elem);

		// Corrige problemas de clonagem do IE
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc(elem)) {

			// Evitamos o Sizzle aqui por motivos de desempenho: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll(clone);
			srcElements = getAll(elem);

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput(srcElements[i], destElements[i]);
			}
		}

		// Copia os eventos do original para o clone
		if (dataAndEvents) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll(elem);
				destElements = destElements || getAll(clone);

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} senão {
				cloneCopyEvent(elem, clone);
			}
		}

		// Preserva o histórico de avaliação do script
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Retorna o conjunto clonado
		retornar clone;
	},

	cleanData: function(elems) {
		var dados, elem, tipo,
			especial = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( dados = elem[ dataPriv.expando ] ) ) {
					if (dados.eventos) {
						for (digite data.events) {
							if ( especial [ tipo ] ) {
								jQuery.event.remove( elem, type );

							// Este é um atalho para evitar a sobrecarga do jQuery.event.remove
							} senão {
								jQuery.removeEvent( elem, tipo, data.handle );
							}
						}
					}

					// Suporte: Chrome <=35 - 45+
					// Atribui undefined em vez de usar delete, veja Data#remove
					elem[ dataPriv.expando ] = indefinido;
				}
				if (elem[dataUser.expando]) {

					// Suporte: Chrome <=35 - 45+
					// Atribui undefined em vez de usar delete, veja Data#remove
					elem[ dataUser.expando ] = indefinido;
				}
			}
		}
	}
});

jQuery.fn.extend({
	desanexar: function(seletor) {
		return remove( this, selector, true );
	},

	remover: function(seletor) {
		return remove( this, seletor );
	},

	texto: função(valor){
		return access( this, function( value ) {
			valor de retorno === indefinido?
				jQuery.text( this ):
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = valor;
					}
				});
		}, nulo, valor, argumentos.comprimento);
	},

	acrescentar: function() {
		return domManip( this, argumentos, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var alvo = manipulaçãoTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prefixo: function() {
		return domManip( this, argumentos, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var alvo = manipulaçãoTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	antes: function() {
		return domManip( this, argumentos, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	depois: function(){
		return domManip( this, argumentos, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	vazio: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Previne vazamentos de memória
				jQuery.cleanData( getAll( elem, false ) );

				// Remove todos os nós restantes
				elem.textContent = "";
			}
		}

		devolva isso;
	},

	clone: ​​function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function(valor){
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				e = 0,
				l = este.comprimento;

			if ( valor === indefinido && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// Veja se podemos pegar um atalho e apenas usar innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				valor = jQuery.htmlPrefilter( valor );

				tentar {
					for ( ; i < l; i++ ) {
						elem = this[i] || {};

						// Remove nós de elementos e previne vazamentos de memória
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = valor;
						}
					}

					ele = 0;

				// Se usar innerHTML lançar uma exceção, use o método fallback
				} pegar ( e ) {}
			}

			if (elem) {
				this.empty().append( value );
			}
		}, nulo, valor, argumentos.comprimento);
	},

	substituir com: function() {
		var ignorado = [];

		// Faça as alterações, substituindo cada elemento de contexto não ignorado pelo novo conteúdo
		return domManip( this, argumentos, function( elem ) {
			var pai = this.parentNode;

			if ( jQuery.inArray( this, ignore ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if (pai) {
					parent.replaceChild( elem, this );
				}
			}

		// Força a chamada de retorno de chamada
		}, ignorado);
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "antes",
	insertAfter: "depois",
	replaceAll: "substituirCom"
}, function(nome, original) {
	jQuery.fn[ nome ] = function(seletor) {
		var elementos,
			ret = [],
			inserir = jQuery(seletor),
			último = insert.length - 1,
			i = 0;

		for ( ; i <= último; i++ ) {
			elems = i === último ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
			// .get() porque push.apply(_, arraylike) lança no antigo WebKit
			push.apply(ret, elems.get());
		}

		return this.pushStack( ret );
	};
});
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[az%]+$", "i" );

var rcustomProp = /^--/;


var getEstilos = function(elem) {

		// Suporte: IE <=11 apenas, Firefox <=30 (trac-15098, trac-14150)
		// IE lança elementos criados em pop-ups
		// Enquanto isso, FF lança elementos de quadro por meio de "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (!view || !view.opener) {
			vista = janela;
		}

		return view.getComputedStyle( elem );
	};

var swap = function(elem, opções, callback) {
	var ret, nome,
		antigo = {};

	// Lembre-se dos valores antigos e insira os novos
	for (nome nas opções) {
		old[ nome ] = elem.style[ nome ];
		elem.style[ nome ] = opções[ nome ];
	}

	ret = callback.call(elem);

	// Reverte os valores antigos
	for (nome nas opções) {
		elem.style[ nome ] = antigo[ nome ];
	}

	retorno ret;
};


var rboxStyle = new RegExp(cssExpand.join( "|" ), "i" );

var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + espaço em branco + "+|((?:^|[^\\\\])(?:\\\\.)*)" + espaço em branco + "+$",
	"g"
);




(função(){

	// A execução de testes pixelPosition e boxSizingReliable requer apenas um layout
	// então eles são executados ao mesmo tempo para salvar o segundo cálculo.
	function computeStyleTests() {

		// Este é um singleton, precisamos executá-lo apenas uma vez
		if (!div){
			Retorna;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;preenchimento:0;borda:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"largura:60%;topo:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Suporte: apenas Android 4.0 - 4.3, Firefox <=3 - 44
		trustMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Suporte: apenas Android 4.0 - 4.3, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Alguns estilos voltam com valores percentuais, mesmo que não devam
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Suporte: IE 9 - 11 apenas
		// Detecta relatórios incorretos de dimensões de conteúdo para elementos box-sizing:border-box
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Suporte: apenas IE 9
		// Detectar overflow:scroll screwiness (gh-3699)
		// Suporte: Chrome <=64
		// Não seja enganado quando o zoom afeta offsetWidth (gh-4029)
		div.style.position = "absoluto";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Anula a div para que não seja armazenada na memória e
		// também será um sinal de que verificações já realizadas
		div = null;
	}

	function roundPixelMeasures(medida) {
		return Math.round( parseFloat( medida ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		confiávelTrDimensionsVal, confiávelMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Termine cedo em ambientes limitados (sem navegador)
	if (!div.style) {
		Retorna;
	}

	// Suporte: IE <=9 - 11 apenas
	// O estilo do elemento clonado afeta o elemento de origem clonado (trac-8908)
	div.style.backgroundClip = "caixa de conteúdo";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( suporte, {
		boxSizingReliable: function() {
			computaEstiloTestes();
			caixa de retornoSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computaEstiloTestes();
			retornar pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computaEstiloTestes();
			retornar pixelPositionVal;
		},
		trustMarginLeft: function() {
			computaEstiloTestes();
			retornar confiávelMarginLeftVal;
		},
		scrollboxSize: function() {
			computaEstiloTestes();
			return scrollboxSizeVal;
		},

		// Suporte: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge reporta incorretamente `getComputedStyle` de linhas da tabela com largura/altura
		// definido em CSS enquanto as propriedades `offset*` relatam valores corretos.
		// O comportamento no IE 9 é mais sutil do que nas versões mais recentes e passa
		// algumas versões deste teste; certifique-se de não fazê-lo passar lá!
		//
		// Suporte: Firefox 70+
		// Somente o Firefox inclui larguras de borda
		// em dimensões computadas. (gh-4529)
		trustTrDimensions: function() {
			var tabela, tr, trChild, trStyle;
			if (trustTrDimensionsVal == null ) {
				tabela = document.createElement( "tabela" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "borda:1px sólido";

				// Suporte: Chrome 86+
				// A altura definida por meio de cssText não é aplicada.
				// Altura calculada então volta como 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Suporte: Android 8 Chrome 86+
				// Em nosso iframe bodyBackground.html,
				// a exibição de todos os elementos div é definida como "inline",
				// que causa um problema apenas no Android 8 Chrome 86.
				// Garantindo que a div seja exibida: block
				// contorna esse problema.
				trChild.style.display = "bloco";

				documentElement
					.appendChild(tabela)
					.appendChild(tr)
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				confiávelTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( tabela );
			}
			retornar confiávelTrDimensionsVal;
		}
	});
} )();


function curCSS(elem, nome, computado) {
	var largura, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( nome ),

		// Suporte: Firefox 51+
		// Recuperando o estilo antes de ser computado de alguma forma
		// corrige um problema com valores errados
		// em elementos separados
		estilo = ele.estilo;

	computado = computado || getStyles(elem);

	// getPropertyValue é necessário para:
	// .css('filter') (somente IE 9, trac-12537)
	// .css('--customProperty) (gh-3144)
	se (computado) {
		ret = computado.getPropertyValue( nome ) || computado[ nome ];

		// apara o espaço em branco para a propriedade personalizada (problema gh-4926)
		if ( isCustomProp ) {

			// rtrim trata U+000D CARRIAGE RETURN e U+000C FORM FEED
			// como espaço em branco enquanto o CSS não, mas isso não é um problema
			// porque o pré-processamento CSS os substitui por U+000A LINE FEED
			// (que *é* espaço em branco CSS)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace(rtrimCSS, "$1");
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style(elem, nome);
		}

		// Uma homenagem ao "incrível hack de Dean Edwards"
		// O navegador Android retorna a porcentagem de alguns valores,
		// mas a largura parece ser pixels confiáveis.
		// Isso é contra a especificação de rascunho do CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			//Lembra os valores originais
			largura = estilo.largura;
			minWidth = estilo.minWidth;
			maxWidth = estilo.maxWidth;

			// Coloque os novos valores para obter um valor calculado
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computado.largura;

			// Reverte os valores alterados
			estilo.largura = largura;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Suporte: IE <=9 - 11 apenas
		// IE retorna o valor de zIndex como um inteiro.
		ret + "" :
		ret;
}


function addGetHookIf(condiçãoFn, hookFn) {

	// Defina o gancho, vamos verificar na primeira execução se é realmente necessário.
	Retorna {
		obter: função(){
			if (condiçãoFn()){

				// Gancho não é necessário (ou não é possível usá-lo devido
				// para dependência ausente), remova-a.
				delete this.get;
				Retorna;
			}

			// Gancho necessário; redefina-o para que o teste de suporte não seja executado novamente.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	EmptyStyle = document.createElement( "div" ).style,
	vendedorProps = {};

// Retorna uma propriedade com prefixo de fornecedor ou indefinida
função vendedorPropName( nome ) {

	// Verifica os nomes prefixados do fornecedor
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	enquanto eu-- ) {
		nome = cssPrefixes[i] + capName;
		if ( nome em estilo vazio ) {
			nome de retorno;
		}
	}
}

// Retorna um jQuery.cssProps potencialmente mapeado ou uma propriedade prefixada de fornecedor
function finalPropName(nome) {
	var final = jQuery.cssProps[ nome ] || vendedorProps[ nome ];

	se (final) {
		retorno definitivo;
	}
	if ( nome em estilo vazio ) {
		nome de retorno;
	}
	return vendorProps[ nome ] = vendedorPropName( nome ) || nome;
}


var

	// Trocável se a exibição não for nenhuma ou começar com a tabela
	// exceto "table", "table-cell" ou "table-caption"
	// Veja aqui os valores de exibição: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibilidade: "hidden", display: "block" },
	cssNormalTransform = {
		Espaçamento entre letras: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, valor, subtrair ) {

	// Quaisquer valores relativos (+/-) já foram
	// normalizado neste ponto
	var corresponde = rcssNum.exec( valor );
	retornar partidas?

		// Protege contra "subtrair" indefinido, por exemplo, quando usado como em cssHooks
		Math.max( 0, correspondências[ 2 ] - ( subtrair || 0 ) ) + ( correspondências[ 3 ] || "px" ):
		valor;
}

function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimensão === "largura" ? 1: 0,
		extra = 0,
		delta = 0;

	// O ajuste pode não ser necessário
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		retornar 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Ambos os modelos de caixa excluem margem
		if (caixa === "margem") {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, estilos );
		}

		// Se chegarmos aqui com uma caixa de conteúdo, estamos procurando "preenchimento" ou "borda" ou "margem"
		if ( !isBorderBox ) {

			// Adiciona preenchimento
			delta += jQuery.css( elem, "preenchimento" + cssExpand[ i ], true, estilos );

			// Para "borda" ou "margem", adiciona borda
			if ( box !== "preenchimento" ) {
				delta += jQuery.css( elem, "borda" + cssExpand[ i ] + "Largura", true, estilos );

			// Mas ainda acompanha de outra forma
			} senão {
				extra += jQuery.css( elem, "borda" + cssExpand[ i ] + "Largura", true, estilos );
			}

		// Se chegarmos aqui com uma caixa de borda (conteúdo + preenchimento + borda), estamos procurando "conteúdo" ou
		// "preenchimento" ou "margem"
		} senão {

			// Para "conteúdo", subtrai o preenchimento
			if ( box === "conteúdo" ) {
				delta -= jQuery.css( elem, "preenchimento" + cssExpand[ i ], true, estilos );
			}

			// Para "conteúdo" ou "preenchimento", subtrair borda
			if ( box !== "margem") {
				delta -= jQuery.css( elem, "borda" + cssExpand[ i ] + "Largura", true, estilos );
			}
		}
	}

	// Conta para a calha de rolagem da caixa de conteúdo positiva quando solicitado fornecendo computedVal
	if ( !isBorderBox && calculadoVal >= 0 ) {

		// offsetWidth/offsetHeight é uma soma arredondada de conteúdo, preenchimento, calha de rolagem e borda
		// Assumindo a calha de rolagem inteira, subtraia o resto e arredonda para baixo
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			calculadoVal -
			delta -
			extra -
			0,5

		// Se offsetWidth/offsetHeight for desconhecido, não podemos determinar a calha de rolagem da caixa de conteúdo
		// Use um zero explícito para evitar NaN (gh-3964)
		) ) || 0;
	}

	delta de retorno;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Começa com o estilo computado
	var estilos = getStyles( elem ),

		// Para evitar forçar um refluxo, apenas busque boxSizing se precisarmos (gh-4322).
		// Falso content-box até sabermos que é necessário saber o valor verdadeiro.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimensão, estilos ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Suporte: Firefox <=54
	// Retorna um valor não-pixel confuso ou finge ignorância, conforme apropriado.
	if (rnumnonpx.test(val)) {
		if (!extra){
			valor de retorno;
		}
		val = "auto";
	}


	// Suporte: IE 9 - 11 apenas
	// Use offsetWidth/offsetHeight para quando o dimensionamento da caixa não for confiável.
	// Nesses casos, pode-se confiar que o valor calculado é border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Suporte: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge reporta incorretamente `getComputedStyle` de linhas da tabela com largura/altura
		// definido em CSS enquanto as propriedades `offset*` relatam valores corretos.
		// Curiosamente, em alguns casos o IE 9 não sofre com este problema.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Retorna para offsetWidth/offsetHeight quando o valor é "auto"
		// Isso acontece para elementos inline sem configuração explícita (gh-3571)
		val === "automático" ||

		// Suporte: Android <=4.1 - apenas 4.3
		// Também use offsetWidth/offsetHeight para dimensões inline informadas incorretamente (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "exibir", false, estilos ) === "inline" ) &&

		// Verifique se o elemento está visível e conectado
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, estilos ) === "border-box";

		// Onde disponível, offsetWidth/offsetHeight dimensões aproximadas da caixa de borda.
		// Onde não estiver disponível (por exemplo, SVG), suponha um dimensionamento de caixa não confiável e interprete o
		// valor recuperado como uma dimensão de caixa de conteúdo.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normaliza "" e auto
	val = parseFloat( val ) || 0;

	// Ajusta para o modelo de caixa do elemento
	retornar (val +
		boxModelAdjustment(
			ele,
			dimensão,
			extra || ( isBorderBox ? "border" : "conteúdo" ),
			valueIsBorderBox,
			estilos,

			// Forneça o tamanho calculado atual para solicitar o cálculo da calha de rolagem (gh-3589)
			valor
		)
	) + "px";
}

jQuery.extend({

	// Adiciona ganchos de propriedade de estilo para substituir o padrão
	// comportamento de obter e definir uma propriedade de estilo
	cssHooks: {
		opacidade: {
			get: function(elem, computado) {
				se (computado) {

					// Devemos sempre obter um número de volta da opacidade
					var ret = curCSS( elem, "opacidade" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Não adicione automaticamente "px" a essas propriedades possivelmente sem unidade
	cssNúmero: {
		"animationIterationCount": verdadeiro,
		"columnCount": verdadeiro,
		"fillOpacity": verdadeiro,
		"flexGrow": verdadeiro,
		"flexShrink": verdadeiro,
		"fontWeight": verdadeiro,
		"gridArea": ​​verdadeiro,
		"gridColumn": verdadeiro,
		"gridColumnEnd": verdadeiro,
		"gridColumnStart": verdadeiro,
		"gridRow": verdadeiro,
		"gridRowEnd": verdadeiro,
		"gridRowStart": verdadeiro,
		"lineHeight": verdadeiro,
		"opacidade": verdadeiro,
		"ordem": verdadeiro,
		"órfãos": verdadeiro,
		"viúvas": verdade,
		"zIndex": verdadeiro,
		"zoom": verdadeiro
	},

	// Adiciona propriedades cujos nomes você deseja corrigir antes
	// definindo ou obtendo o valor
	cssProps: {},

	// Obtém e define a propriedade de estilo em um nó DOM
	style: function(elem, name, value, extra) {

		// Não defina estilos em nós de texto e comentário
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			Retorna;
		}

		// Certifique-se de que estamos trabalhando com o nome correto
		var ret, tipo, ganchos,
			origName = camelCase( nome ),
			isCustomProp = rcustomProp.test( nome ),
			estilo = ele.estilo;

		// Certifique-se de que estamos trabalhando com o nome correto. Nós não
		// deseja consultar o valor se for uma propriedade customizada CSS
		// já que eles são definidos pelo usuário.
		if ( !isCustomProp ) {
			nome = finalPropName( origName );
		}

		// Obtém o gancho para a versão prefixada e, em seguida, a versão não prefixada
		ganchos = jQuery.cssHooks[ nome ] || jQuery.cssHooks[ origName ];

		// Verifica se estamos configurando um valor
		if ( valor !== indefinido ) {
			tipo = tipo de valor;

			// Converte "+=" ou "-=" em números relativos (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				valor = ajusteCSS(elem, nome, ret);

				// Corrige o bug trac-9237
				tipo = "número";
			}

			// Certifique-se de que os valores null e NaN não estejam definidos (trac-7116)
			if ( valor == null || valor !== valor ) {
				Retorna;
			}

			// Se um número foi passado, adiciona a unidade (exceto algumas propriedades CSS)
			// A verificação isCustomProp pode ser removida no jQuery 4.0 quando apenas anexamos automaticamente
			// "px" para alguns valores codificados.
			if ( tipo === "número" && !isCustomProp ) {
				valor += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// adereços background-* afetam os valores do clone original
			if (!support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				estilo[ nome ] = "herdar";
			}

			// Se um gancho foi fornecido, use esse valor, caso contrário, apenas defina o valor especificado
			if ( !hooks || !( "set" em hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( nome, valor );
				} senão {
					estilo[ nome ] = valor;
				}
			}

		} senão {

			// Se um gancho foi fornecido, obtenha o valor não calculado de lá
			if ( ganchos && "get" em ganchos &&
				(ret = hooks.get(elem, false, extra)) !== undefined) {

				retorno ret;
			}

			// Caso contrário, apenas obtenha o valor do objeto de estilo
			return estilo[nome];
		}
	},

	css: function(elem, nome, extra, estilos) {
		var val, num, ganchos,
			origName = camelCase( nome ),
			isCustomProp = rcustomProp.test( nome );

		// Certifique-se de que estamos trabalhando com o nome correto. Nós não
		// deseja modificar o valor se for uma propriedade customizada CSS
		// já que eles são definidos pelo usuário.
		if ( !isCustomProp ) {
			nome = finalPropName( origName );
		}

		// Tente o nome prefixado seguido pelo nome não prefixado
		ganchos = jQuery.cssHooks[ nome ] || jQuery.cssHooks[ origName ];

		// Se um gancho foi fornecido, obtenha o valor calculado de lá
		if ( ganchos && "get" em ganchos ) {
			val = ganchos.get(elem, true, extra);
		}

		// Caso contrário, se existe uma maneira de obter o valor calculado, use isso
		if (val === indefinido) {
			val = curCSS( elem, nome, estilos );
		}

		// Converte "normal" para valor calculado
		if ( val === "normal" && nome em cssNormalTransform ) {
			val = cssNormalTransform[ nome ];
		}

		// Torna numérico se for forçado ou um qualificador foi fornecido e val parece numérico
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === verdadeiro || éFinito( num) ? número || 0 : valor;
		}

		valor de retorno;
	}
});

jQuery.each( [ "altura", "largura" ], function( _i, dimensão ) {
	jQuery.cssHooks[ dimensão ] = {
		get: function(elem, calculado, extra) {
			se (computado) {

				// Certos elementos podem ter informações de dimensão se os mostrarmos de forma invisível
				// mas deve ter um estilo de exibição atual que beneficie
				return rdisplayswap.test( jQuery.css( elem, "display") ) &&

					// Suporte: Safari 8+
					// Colunas de tabela no Safari têm offsetWidth e zero diferentes de zero
					// getBoundingClientRect().width a menos que a exibição seja alterada.
					// Suporte: IE <=11 apenas
					// Executando getBoundingClientRect em um nó desconectado
					// no IE lança um erro.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap(elem, cssShow, function() {
						return getWidthOrHeight(elem, dimension, extra);
					}):
					getWidthOrHeight(elem, dimensão, extra);
			}
		},

		set: function(elem, valor, extra) {
			var partidas,
				estilos = getEstilos(elem),

				// Apenas leia styles.position se o teste tiver chance de falhar
				// para evitar forçar um reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					estilos.posição === "absoluto",

				// Para evitar forçar um refluxo, apenas busque boxSizing se precisarmos (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtrair = extra?
					boxModelAdjustment(
						ele,
						dimensão,
						extra,
						isBorderBox,
						estilos
					):
					0;

			// Considera as dimensões não confiáveis ​​da caixa de borda comparando o deslocamento* com o calculado e
			// fingindo uma content-box para obter borda e preenchimento (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtrair -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat(estilos[dimensão]) -
					boxModelAdjustment(elem, dimension, "border", false, styles ) -
					0,5
				);
			}

			// Converte para pixels se for necessário ajuste de valor
			if (subtrair && (correspondências = rcssNum.exec( valor)) &&
				( corresponde [ 3 ] || "px") !== "px" ) {

				elem.style[ dimensão ] = valor;
				valor = jQuery.css(elem, dimensão);
			}

			return setPositiveNumber(elem, valor, subtrair);
		}
	};
});

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function(elem, computado) {
		se (computado) {
			return ( parseFloat( curCSS( elem, "marginLeft") ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					})
			) + "px";
		}
	}
);

// Esses ganchos são usados ​​pelo animate para expandir as propriedades
jQuery.each({
	margem: "",
	preenchimento: "",
	borda: "Largura"
}, function(prefixo, sufixo) {
	jQuery.cssHooks[ prefixo + sufixo ] = {
		expandir: function(valor){
			var i = 0,
				expandido = {},

				// Assume um único número se não for uma string
				partes = tipo de valor === "string" ? value.split( " " ): [ valor ];

			for ( ; i < 4; i++ ) {
				expandido[ prefixo + cssExpand[ i ] + sufixo ] =
					partes[i] || partes[i-2] || partes[0];
			}

			retorno expandido;
		}
	};

	if ( prefixo !== "margem") {
		jQuery.cssHooks[ prefixo + sufixo ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( nome, valor ) {
		return access( this, function( elem, name, value ) {
			var estilos, len,
				mapa = {},
				i = 0;

			if ( Array.isArray( nome ) ) {
				estilos = getEstilos(elem);
				len = nome.comprimento;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, estilos );
				}

				mapa de retorno;
			}

			valor de retorno !== indefinido ?
				jQuery.style(elem, nome, valor):
				jQuery.css(elem, nome);
		}, nome, valor, argumentos.comprimento > 1);
	}
});


function Tween( elem, opções, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Interpolação;

Tween.prototype = {
	construtor: Tween,
	init: function(elem, options, prop, end, easing, unit) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = opções;
		this.start = this.now = this.cur();
		este.fim = fim;
		this.unit = unidade || (jQuery.cssNumber[prop]? "": "px");
	},
	cur: function() {
		var ganchos = Tween.propHooks[ this.prop ];

		return ganchos && ganchos.get ?
			hooks.get(this):
			Tween.propHooks._default.get( this );
	},
	execute: function( por cento) {
		var facilitado,
			ganchos = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = facilitado = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} senão {
			this.pos = facilitado = por cento;
		}
		this.now = ( this.end - this.start ) * facilitado + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( ganchos && ganchos.set ) {
			ganchos.set( this );
		} senão {
			Tween.propHooks._default.set( this );
		}
		devolva isso;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_predefinição: {
		get: function(interpolação) {
			var resultado;

			// Usa uma propriedade no elemento diretamente quando não é um elemento DOM,
			// ou quando não existe nenhuma propriedade de estilo correspondente.
			if (tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passar uma string vazia como terceiro parâmetro para .css irá automaticamente
			// tenta parseFloat e faz fallback para uma string se a análise falhar.
			// Valores simples como "10px" são analisados ​​para Float;
			// valores complexos como "rotate(1rad)" são retornados como estão.
			resultado = jQuery.css( tween.elem, tween.prop, "" );

			// Strings vazias, null, undefined e "auto" são convertidas em 0.
			retornar !resultado || resultado === "auto" ? 0 : resultado;
		},
		set: function(interpolação) {

			// Use step hook para retrocompatibilidade.
			// Use cssHook se estiver lá.
			// Use .style se disponível e use propriedades simples quando disponíveis.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} senão {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Suporte: IE <=9 apenas
// Abordagem baseada em pânico para definir as coisas em nós desconectados
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function(interpolação) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function(p){
		retornar p;
	},
	swing: function(p){
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 ponto de extensão
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

função agenda() {
	if ( em andamento ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( agenda );
		} senão {
			window.setTimeout( agenda, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animações criadas de forma síncrona serão executadas de forma síncrona
função criarFxAgora() {
	window.setTimeout( function() {
		fxAgora = indefinido;
	});
	return ( fxNow = Date.now() );
}

// Gera parâmetros para criar uma animação padrão
function genFx( tipo, includeWidth ) {
	var que,
		e = 0,
		attrs = { altura: tipo };

	// Se incluirmos largura, o valor do passo é 1 para fazer todos os valores cssExpand,
	// caso contrário, o valor do passo é 2 para pular Esquerda e Direita
	includeWidth = includeWidth ? 1:0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[i];
		attrs[ "margem" + qual ] = attrs[ "preenchimento" + qual ] = tipo;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = tipo;
	}

	retorno atras;
}

function createTween( valor, prop, animação ) {
	var interpolação,
		coleção = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		índice = 0,
		comprimento = coleção.comprimento;
	for ( ; índice < comprimento; índice++ ) {
		if ( ( interpolação = coleção[ índice ].call( animação, prop, valor ) ) ) {

			// Terminamos com esta propriedade
			retornar interpolação;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "largura" em adereços || "altura" em adereços,
		anim = isso,
		origem = {},
		estilo = elem.estilo,
		oculto = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Animações de salto de fila sequestram os ganchos fx
	if (!opts.queue) {
		ganchos = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = ganchos.empty.fire;
			hooks.empty.fire = function() {
				if (!hooks.unqueued) {
					fogo antigo();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Certifique-se de que o manipulador completo seja chamado antes que isso seja concluído
			anim.always( function() {
				hooks.unqueued--;
				if (!jQuery.queue(elem, "fx").length) {
					ganchos.vazio.fogo();
				}
			});
		});
	}

	// Detecta mostrar/ocultar animações
	for (prop in props) {
		valor = props[prop];
		if ( rfxtypes.test( valor ) ) {
			delete props[prop];
			alternar = alternar || valor === "alternar";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Finja estar oculto se for um "show" e
				// ainda há dados de uma exibição/ocultação interrompida
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					oculto = verdadeiro;

				// Ignora todos os outros dados de exibição/ocultação sem operação
				} senão {
					Prosseguir;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style(elem, prop);
		}
	}

	// Resgate se for um no-op como .hide().hide()
	propTween = !jQuery.isEmptyObject(props);
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		Retorna;
	}

	// Restringir os estilos "overflow" e "display" durante as animações de caixa
	if ( isBox && elem.nodeType === 1 ) {

		// Suporte: IE <=9 - 11, Edge 12 - 15
		// Grava todos os 3 atributos de estouro porque o IE não infere a abreviação
		// de overflowX e overflowY com valores idênticos e Edge apenas espelha
		// o valor overflowX lá.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identifica um tipo de exibição, preferindo mostrar/ocultar dados antigos sobre a cascata CSS
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "nenhum" ) {
			if (restoreDisplay) {
				exibir = restaurarExibir;
			} senão {

				// Obtém valor(es) não vazio(s) forçando temporariamente a visibilidade
				showHide([elem], true);
				restoreDisplay = elem.style.display || restaurarExibir;
				display = jQuery.css( elem, "display" );
				showHide([elem]);
			}
		}

		// Anima elementos inline como bloco inline
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "nenhum" ) {

				// Restaura o valor de exibição original no final de animações puras de mostrar/ocultar
				if (!propTween) {
					anim.done( function() {
						style.display = restoreDisplay;
					});
					if ( restoreDisplay == null ) {
						display = estilo.display;
						restoreDisplay = display === "nenhum" ? "" : exibição;
					}
				}
				style.display = "bloco embutido";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "escondido";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// Implementa animações de mostrar/ocultar
	propTween = false;
	for (prop in original) {

		// Configuração geral de mostrar/ocultar para a animação deste elemento
		if (!propTween) {
			if (dataShow) {
				if ( "escondido" em dataShow ) {
					oculto = dataShow.hidden;
				}
			} senão {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Armazena oculto/visível para alternar para que `.stop().toggle()` "inverta"
			if (alternar) {
				dataShow.hidden = !hidden;
			}

			// Mostra os elementos antes de animá-los
			if (oculto) {
				showHide([elem], true);
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// A etapa final de uma animação "ocultar" é na verdade ocultar o elemento
				if ( !hidden ) {
					showHide([elem]);
				}
				dataPriv.remove( elem, "fxshow" );
				for (prop in original) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
		}

		// Configuração por propriedade
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if (!(prop in dataShow)) {
			dataShow[ prop ] = propTween.start;
			if (oculto) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter(props, specialEasing) {
	var índice, nome, atenuação, valor, ganchos;

	// camelCase, specialEasing and expand cssHook pass
	for (índice em adereços) {
		nome = camelCase(índice);
		easing = specialEasing[ nome ];
		valor = props[índice];
		if ( Array.isArray( valor ) ) {
			atenuação = valor[ 1 ];
			valor = props[ índice ] = valor[ 0 ];
		}

		if ( índice !== nome ) {
			props[ nome ] = valor;
			delete props[índice];
		}

		ganchos = jQuery.cssHooks[ nome ];
		if ( ganchos && "expandir" em ganchos ) {
			valor = ganchos.expand(valor);
			delete props[ nome ];

			// Não exatamente $.extend, isso não substituirá as chaves existentes.
			// Reutilizando 'index' porque temos o "nome" correto
			for (índice em valor) {
				if ( !( índice em props ) ) {
					props[índice] = valor[índice];
					specialEasing[ index ] = easing;
				}
			}
		} senão {
			specialEasing[ nome ] = easing;
		}
	}
}

function Animação(elem, propriedades, opções) {
	var resultado,
		parou,
		índice = 0,
		comprimento = Animação.prefiltros.comprimento,
		adiado = jQuery.Deferred().always( function() {

			// Não combina com elem no seletor :animated
			delete tick.elem;
		}),
		tick = function() {
			if (parado) {
				retorna falso;
			}
			var currentTime = fxNow || criarFxAgora(),
				restante = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Suporte: apenas Android 2.3
				// Bug de travamento arcaico não nos permitirá usar `1 - ( 0.5 || 0 )` (trac-12497)
				temp = restante / animação.duração || 0,
				porcentagem = 1 - temperatura,
				índice = 0,
				comprimento = animação.tweens.comprimento;

			for ( ; índice < comprimento; índice++ ) {
				animação.tweens[ index ].run( percent );
			}

			deferred.notifyWith(elem, [animação, porcentagem, restante]);

			// Se houver mais a fazer, renda
			if ( porcentagem < 1 && comprimento ) {
				retorno restante;
			}

			// Se esta foi uma animação vazia, sintetiza uma notificação final de progresso
			if ( !comprimento ) {
				deferred.notifyWith( elem, [ animação, 1, 0 ] );
			}

			// Resolve a animação e relata sua conclusão
			deferred.resolveWith(elem, [animação]);
			retorna falso;
		},
		animação = deferred.promise({
			ele: ele,
			props: jQuery.extend( {}, propriedades ),
			opts: jQuery.extend( true, {
				SpecialEasing: {},
				easing: jQuery.easing._default
			}, opções ),
			propriedades originais: propriedades,
			originalOpções: opções,
			startTime: fxNow || criarFxAgora(),
			duração: opções.duração,
			interpolações: [],
			createTween: function(prop, end) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animação.opts.specialEasing[ prop ] || animação.opts.easing );
				animação.tweens.push( interpolação );
				retornar interpolação;
			},
			parar: function(gotoEnd) {
				var índice = 0,

					// Se formos até o fim, queremos executar todas as interpolações
					// caso contrário, pulamos esta parte
					comprimento = gotoEnd ? animação.interpolação.comprimento : 0;
				if (parado) {
					devolva isso;
				}
				parado = verdadeiro;
				for ( ; índice < comprimento; índice++ ) {
					animação.tweens[ índice ].run( 1 );
				}

				// Resolve quando jogamos o último frame; caso contrário, rejeite
				if (gotoEnd){
					deferred.notifyWith( elem, [ animação, 1, 0 ] );
					deferred.resolveWith( elem, [ animação, gotoEnd ] );
				} senão {
					deferred.rejectWith( elem, [ animação, gotoEnd ] );
				}
				devolva isso;
			}
		}),
		adereços = animação.props;

	propFilter( adereços, animação.opts.specialEasing );

	for ( ; índice < comprimento; índice++ ) {
		resultado = Animation.prefilters[ index ].call(animation, elem, props, animation.opts );
		se (resultado) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					resultado.stop.bind( resultado );
			}
			retorno resultado;
		}
	}

	jQuery.map( adereços, createTween, animação );

	if ( isFunction( animação.opts.start ) ) {
		animação.opts.start.call( elem, animação );
	}

	// Anexar callbacks das opções
	animação
		.progress( animação.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail(animação.opts.fail)
		.sempre(animação.opts.sempre);

	jQuery.fx.timer(
		jQuery.extend( tick, {
			ele: ele,
			anime: animação,
			fila: animação.opts.queue
		})
	);

	animação de retorno;
}

jQuery.Animation = jQuery.extend( Animation, {

	interpolações: {
		"*": [ function(prop, valor) {
			var interpolação = this.createTween( prop, valor );
			ajusteCSS( interpolação.elem, prop, rcssNum.exec(valor), interpolação);
			retornar interpolação;
		} ]
	},

	tweener: function(props, callback) {
		if ( isFunction( props ) ) {
			retorno de chamada = adereços;
			adereços = ["*"];
		} senão {
			props = props.match(rnothtmlwhite);
		}

		var prop,
			índice = 0,
			comprimento = adereços.comprimento;

		for ( ; índice < comprimento; índice++ ) {
			prop = props[ índice ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	pré-filtros: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prefixar ) {
			Animation.prefilters.unshift( callback );
		} senão {
			Animation.prefilters.push( callback );
		}
	}
});

jQuery.speed = function( velocidade, easing, fn ) {
	var opt = speed && typeof speed === "objeto" ? jQuery.extend( {}, velocidade ): {
		completo: fn || !fn && easing ||
			isFunction( velocidade ) && velocidade,
		duração: velocidade,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Vai para o estado final se fx estiver desligado
	if (jQuery.fx.off) {
		opção.duração = 0;

	} senão {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration em jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} senão {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normaliza opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Fila
	opt.old = opt.completo;

	opt.completo = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	opção de retorno;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Mostra todos os elementos ocultos após definir a opacidade para 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Anima para o valor especificado
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var vazio = jQuery.isEmptyObject(prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Opera em uma cópia de prop para que a flexibilização por propriedade não seja perdida
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Animações vazias, ou finalização resolve imediatamente
				if (vazio || dataPriv.get(this, "terminar")) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		retornar vazio || optall.queue === false ?
			this.each(doAnimation):
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function(ganchos) {
			var stop = ganchos.stop;
			delete hooks.stop;
			stop(gotoEnd);
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = tipo;
			tipo = indefinido;
		}
		if ( clearQueue ) {
			this.queue( tipo || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				temporizadores = jQuery.timers,
				data = dataPriv.get( this );

			if (índice) {
				if ( dados[ índice ] && dados[ índice ].stop ) {
					stopQueue(dados[índice]);
				}
			} senão {
				for (índice nos dados) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue(dados[índice]);
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					temporizadores[ índice ].anim.stop( gotoEnd );
					desenfileiramento = falso;
					timers.splice( índice, 1 );
				}
			}

			// Inicia o próximo na fila se a última etapa não foi forçada.
			// Os temporizadores atualmente chamarão seus retornos de chamada completos, que
			// irá desenfileirar, mas somente se forem gotoEnd.
			if (desenfileirar || !gotoEnd) {
				jQuery.dequeue( this, type );
			}
		});
	},
	terminar: function(tipo){
		if ( tipo !== false ) {
			tipo = tipo || "fx";
		}
		return this.each( function() {
			índice var,
				data = dataPriv.get( this ),
				fila = dados[ tipo + "fila" ],
				ganchos = data[ tipo + "queueHooks" ],
				temporizadores = jQuery.timers,
				comprimento = fila? fila.comprimento : 0;

			// Ativar flag de finalização em dados privados
			data.finish = true;

			// Esvazie a fila primeiro
			jQuery.queue( this, type, [] );

			if ( ganchos && ganchos.stop ) {
				hooks.stop.call( this, true );
			}

			// Procure por quaisquer animações ativas e termine-as
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					temporizadores[ índice ].anim.stop( true );
					timers.splice( índice, 1 );
				}
			}

			// Procure por qualquer animação na fila antiga e termine-a
			for ( índice = 0; índice < comprimento; índice++ ) {
				if ( fila[ índice ] && fila[ índice ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Desativa o sinalizador de finalização
			excluir data.finish;
		});
	}
});

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ nome ];
	jQuery.fn[ nome ] = function( velocidade, facilitação, retorno de chamada ) {
		velocidade de retorno == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ):
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Gera atalhos para animações personalizadas
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("esconder"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacidade: "mostrar" },
	fadeOut: { opacidade: "ocultar" },
	fadeToggle: { opacity: "toggle" }
}, função( nome, adereços ) {
	jQuery.fn[ nome ] = function( velocidade, facilitação, retorno de chamada ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var temporizador,
		e = 0,
		temporizadores = jQuery.timers;

	fxAgora = Data.agora();

	for ( ; i < timers.length; i++ ) {
		temporizador = temporizadores[i];

		// Execute o cronômetro e remova-o com segurança quando terminar (permitindo a remoção externa)
		if ( !timer() && temporizadores[ i ] === temporizador ) {
			temporizadores.splice(i--, 1);
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxAgora = indefinido;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push(temporizador);
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( em andamento ) {
		Retorna;
	}

	inProgress = true;
	cronograma();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	lento: 600,
	rápido: 200,

	// Velocidade padrão
	_padrão: 400
};


// Baseado no plugin de Clint Helfers, com permissão.
jQuery.fn.delay = function( time, type ) {
	tempo = jQuery.fx ? jQuery.fx.speeds[ tempo ] || tempo: tempo;
	tipo = tipo || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		ganchos.stop = function() {
			window.clearTimeout( tempo limite );
		};
	});
};


(função(){
	var input = document.createElement( "input" ),
		select = document.createElement( "selecionar" ),
		opt = select.appendChild( document.createElement( "opção" ) );

	input.type = "caixa de seleção";

	// Suporte: apenas Android <=4.3
	// O valor padrão para uma caixa de seleção deve ser "on"
	support.checkOn = input.value !== "";

	// Suporte: IE <=11 apenas
	// Deve acessar selectedIndex para selecionar as opções padrão
	support.optSelected = opt.selected;

	// Suporte: IE <=11 apenas
	// Uma entrada perde seu valor depois de se tornar um rádio
	entrada = document.createElement( "entrada" );
	valor.entrada = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( nome, valor ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function(nome) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function(elem, nome, valor) {
		var ret, ganchos,
			nType = elem.nodeType;

		// Não obtém/define atributos em nós de texto, comentário e atributo
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			Retorna;
		}

		// Fallback para prop quando os atributos não são suportados
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop(elem, nome, valor);
		}

		// Ganchos de atributo são determinados pela versão minúscula
		// Pega o gancho necessário se um estiver definido
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			ganchos = jQuery.attrHooks[ nome.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( valor !== indefinido ) {
			if ( valor === null ) {
				jQuery.removeAttr(elem, nome);
				Retorna;
			}

			if ( ganchos && "set" em ganchos &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				retorno ret;
			}

			elem.setAttribute( nome, valor + "" );
			valor de retorno;
		}

		if ( hooks && "get" em hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			retorno ret;
		}

		ret = jQuery.find.attr(elem, nome);

		// Atributos inexistentes retornam null, normalizamos para undefined
		return ret == null ? indefinido : ret;
	},

	attrHooks: {
		modelo: {
			set: function(elem, valor){
				if (!support.radioValue && value === "radio" &&
					nodeName(elem, "entrada" ) ) {
					var val = valor.elem;
					elem.setAttribute( "tipo", valor );
					if (val) {
						valor.elem = val;
					}
					valor de retorno;
				}
			}
		}
	},

	removeAttr: function(elem, valor) {
		nome da var,
			e = 0,

			// Os nomes dos atributos podem conter caracteres de espaço em branco não HTML
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( nome = attrNomes[ i++ ] ) ) {
				elem.removeAttribute( nome );
			}
		}
	}
});

// Ganchos para atributos booleanos
boolHook = {
	set: function(elem, valor, nome) {
		if ( valor === falso ) {

			// Remove os atributos booleanos quando configurados como false
			jQuery.removeAttr(elem, nome);
		} senão {
			elem.setAttribute( nome, nome );
		}
		nome de retorno;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ nome ] || jQuery.find.attr;

	attrHandle[ nome ] = function( elem, nome, isXML ) {
		var ret, manusear,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Evite um loop infinito removendo temporariamente esta função do getter
			handle = attrHandle[ nomeminúsculas];
			attrHandle[ nomeminúsculas] = ret;
			ret = getter(elem, name, isXML ) != null ?
				nome minúsculo:
				nulo;
			attrHandle[ nomeminúsculas] = handle;
		}
		retorno ret;
	};
});




var rfocável = /^(?:input|select|textarea|button)$/i,
	rclicável = /^(?:a|área)$/i;

jQuery.fn.extend({
	prop: function( nome, valor ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function(nome) {
		return this.each( function() {
			delete this[ jQuery.propFix[ nome ] || nome ];
		});
	}
});

jQuery.extend({
	prop: function(elem, nome, valor) {
		var ret, ganchos,
			nType = elem.nodeType;

		// Não obtém/define propriedades em nós de texto, comentário e atributo
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			Retorna;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Corrige o nome e anexa os ganchos
			nome = jQuery.propFix[ nome ] || nome;
			ganchos = jQuery.propHooks[ nome ];
		}

		if ( valor !== indefinido ) {
			if ( ganchos && "set" em ganchos &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				retorno ret;
			}

			return(elem[nome] = valor);
		}

		if ( hooks && "get" em hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			retorno ret;
		}

		return elem[ nome ];
	},

	propHooks: {
		tabIndex: {
			get: function(elem){

				// Suporte: IE <=9 - 11 apenas
				// elem.tabIndex nem sempre retorna o
				// valor correto quando não foi definido explicitamente
				// Use a recuperação de atributo adequada (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				E se (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test(elem.nodeName) &&
					elem.href
				) {
					retornar 0;
				}

				retornar -1;
			}
		}
	},

	propFix: {
		"para": "htmlPara",
		"classe": "className"
	}
});

// Suporte: IE <=11 apenas
// Acessando a propriedade selectedIndex
// força o navegador a respeitar a configuração selecionada
// na opção
// O getter garante que uma opção padrão seja selecionada
// quando em um optgroup
// a regra eslint "no-unused-expressions" está desabilitada para este código
// pois considera tais acessos noop
if (!support.optSelected) {
	jQuery.propHooks.selected = {
		get: function(elem){

			/* eslint no-unused-expressions: "off" */

			var pai = elem.parentNode;
			if ( pai && pai.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			retornar nulo;
		},
		set: function(elem){

			/* eslint no-unused-expressions: "off" */

			var pai = elem.parentNode;
			if (pai) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"somente leitura",
	"comprimento máximo",
	"cellSpacing",
	"cellPadding",
	"Expansão de linha",
	"colSpan",
	"useMapa",
	"moldura",
	"conteúdo Editável"
], função(){
	jQuery.propFix[ this.toLowerCase() ] = this;
});




	// Retira e recolhe os espaços em branco de acordo com a especificação HTML
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( valor ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass(elem){
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( valor ) {
	if ( Array.isArray( valor ) ) {
		valor de retorno;
	}
	if ( tipo de valor === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	Retorna [];
}

jQuery.fn.extend({
	addClass: function(valor){
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( valor ) ) {
			return this.each( function(j){
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			});
		}

		classNames = classesToArray( valor );

		if (classNames.length) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if (cur) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[i];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Atribua apenas se for diferente para evitar renderizações desnecessárias.
					valor final = stripAndCollapse( cur );
					if (curValue!== finalValue) {
						this.setAttribute( "classe", finalValue );
					}
				}
			});
		}

		devolva isso;
	},

	removeClass: function(valor){
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( valor ) ) {
			return this.each( function(j){
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			});
		}

		if (!argumentos.comprimento) {
			return this.attr( "classe", "" );
		}

		classNames = classesToArray( valor );

		if (classNames.length) {
			return this.each( function() {
				curValue = getClass( this );

				// Esta expressão está aqui para melhor compressibilidade (veja addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if (cur) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[i];

						// Remove *todas* instâncias
						while (cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Atribua apenas se for diferente para evitar renderizações desnecessárias.
					valor final = stripAndCollapse( cur );
					if (curValue!== finalValue) {
						this.setAttribute( "classe", finalValue );
					}
				}
			});
		}

		devolva isso;
	},

	toggleClass: function( valor, stateVal ) {
		var classNames, className, i, self,
			tipo = tipo de valor,
			isValidValue = tipo === "string" || Array.isArray( valor );

		if ( isFunction( valor ) ) {
			return this.each( function(i){
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			});
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			retornar estadoVal ? this.addClass( valor ): this.removeClass( valor );
		}

		classNames = classesToArray( valor );

		return this.each( function() {
			if ( isValidValue ) {

				// Alterna nomes de classes individuais
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[i];

					// Verifica cada className dado, lista separada por espaços
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} senão {
						self.addClass( className );
					}
				}

			// Alterna o nome da classe inteira
			} else if ( valor === indefinido || tipo === "boolean" ) {
				className = getClass( this );
				if (className) {

					// Armazena className se definido
					dataPriv.set( this, "__className__", className );
				}

				// Se o elemento tiver um nome de classe ou se for passado `false`,
				// em seguida, remova todo o nome da classe (se houver um, o acima o salvou).
				// Caso contrário, traga de volta o que foi salvo anteriormente (se houver),
				// voltando para a string vazia se nada foi armazenado.
				if ( this.setAttribute ) {
					this.setAttribute( "classe",
						className || valor === falso?
							"":
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		});
	},

	hasClass: function(seletor) {
		var className, elem,
			i = 0;

		className = " " + seletor + " ";
		while((elem=this[i++])){
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				retorne verdadeiro;
			}
		}

		retorna falso;
	}
});




var retorno = /\r/g;

jQuery.fn.extend({
	val: função(valor){
		var ganchos, ret, valueIsFunction,
			ele = this[ 0 ];

		if (!argumentos.comprimento) {
			if (elem) {
				ganchos = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( ganchos &&
					"get" em ganchos &&
					(ret = hooks.get(elem, "valor")) !== undefined
				) {
					retorno ret;
				}

				ret = valor.elem;

				// Manipula os casos de string mais comuns
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Lida com casos onde o valor é nulo/undef ou número
				return ret == null ? "" : ret;
			}

			Retorna;
		}

		valueIsFunction = isFunction( value );

		return this.each( function(i){
			var val;

			if ( this.nodeType !== 1 ) {
				Retorna;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} senão {
				valor = valor;
			}

			// Trata null/undefined como ""; converter números em string
			if (val == null) {
				valor = "";

			} else if ( typeof val === "number" ) {
				vale += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( valor ) {
					valor de retorno == null ? "" : valor + "";
				});
			}

			ganchos = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// Se set retornar indefinido, volta para a configuração normal
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				este.valor = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		opção: {
			get: function(elem){

				var val = jQuery.find.attr( elem, "valor" );
				return val != null ?
					valor:

					// Suporte: IE <=10 - 11 apenas
					// option.text lança exceções (trac-14686, trac-14858)
					// Retira e recolhe espaços em branco
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse(jQuery.text(elem));
			}
		},
		selecione: {
			get: function(elem){
				var valor, opção, i,
					opções = ele.options,
					índice = elem.selectedIndex,
					one = elem.type === "selecionar um",
					valores = um? nulo : [],
					max = um? índice + 1 : opções.comprimento;

				if ( índice < 0 ) {
					i = máximo;

				} senão {
					eu = um? índice: 0;
				}

				// Percorre todas as opções selecionadas
				for ( ; i < max; i++ ) {
					opção = opções[i];

					// Suporte: IE <=9 apenas
					// IE8-9 não atualiza selecionado após a redefinição do formulário (trac-2551)
					if ( (opção.selecionada || i === índice) &&

							// Não retorna opções desabilitadas ou em um optgroup desabilitado
							!opção.desativado &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup") ) ) {

						// Obtém o valor específico para a opção
						valor = jQuery( opção ).val();

						// Não precisamos de um array para um select
						se um ) {
							valor de retorno;
						}

						// Multi-Selects retornam um array
						valores.push( valor );
					}
				}

				valores de retorno;
			},

			set: function(elem, valor){
				var opçãoSet, opção,
					opções = ele.options,
					valores = jQuery.makeArray( valor ),
					i = opções.comprimento;

				enquanto eu-- ) {
					opção = opções[i];

					/* eslint-disable no-cond-assign */

					if (opção.selecionado =
						jQuery.inArray( jQuery.valHooks.option.get( opção ), valores ) > -1
					) {
						conjunto de opções = verdadeiro;
					}

					/* eslint-enable no-cond-assign */
				}

				// Força os navegadores a se comportarem de forma consistente quando o valor não correspondente é definido
				if (!optionSet) {
					elem.selectedIndex = -1;
				}
				valores de retorno;
			}
		}
	}
});

// Getter/setter de rádios e checkboxes
jQuery.each( [ "rádio", "caixa de seleção" ], function() {
	jQuery.valHooks[ this ] = {
		set: function(elem, valor){
			if ( Array.isArray( valor ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), valor ) > -1 );
			}
		}
	};
	if (!support.checkOn) {
		jQuery.valHooks[ this ].get = function(elem) {
			return elem.getAttribute( "valor" ) === null ? "on" : elem.value;
		};
	}
});




// Retorna jQuery para inclusão somente de atributos


support.focusin = "onfocusin" na janela;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend(jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || documento],
			type = hasOwn.call( event, "type" ) ? event.type : evento,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ): [];

		cur = lastElement = tmp = elem = elem || documento;

		// Não faz eventos em nós de texto e comentários
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			Retorna;
		}

		// foco/desfoque se transforma em foco/saída; certifique-se de que não estamos demitindo-os agora
		if (rfocusMorph.test(tipo + jQuery.event.triggered)) {
			Retorna;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Gatilho com namespace; crie um regexp para corresponder ao tipo de evento em handle ()
			namespaces = type.split( "." );
			tipo = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// O chamador pode passar um objeto jQuery.Event, Object ou apenas uma string de tipo de evento
		evento = evento[ jQuery.expando ] ?
			evento:
			new jQuery.Event( tipo, tipo de evento === "objeto" && evento );

		// Trigger bitmask: & 1 para manipuladores nativos; & 2 para jQuery (sempre verdadeiro)
		event.isTrigger = onlyHandlers ? 2:3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ):
			nulo;

		// Limpa o evento caso esteja sendo reutilizado
		event.result = indefinido;
		if (!evento.destino) {
			event.target = elem;
		}

		// Clona todos os dados recebidos e adiciona o evento, criando a lista de argumentos do manipulador
		dados = dados == null ?
			[evento]:
			jQuery.makeArray(dados, [evento]);

		// Permitir que eventos especiais desenhem fora das linhas
		especial = jQuery.event.special[ tipo ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			Retorna;
		}

		// Determina o caminho de propagação do evento com antecedência, de acordo com a especificação de eventos do W3C (trac-9951)
		// Bolha para o documento, depois para a janela; observe um proprietário globalDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || modelo;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Apenas adiciona a janela se tivermos que documentar (por exemplo, não obj simples ou DOM desanexado)
			if (tmp === (elem.ownerDocument || document)) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Dispara manipuladores no caminho do evento
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			ultimoElemento = cur;
			event.type = i > 1 ?
				bolhaTipo:
				special.bindType || modelo;

			// manipulador jQuery
			handle = ( dataPriv.get( cur, "eventos" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "manipular" );
			if (manusear) {
				handle.apply(cur, data);
			}

			// Manipulador nativo
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply(cur, data);
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// Se ninguém impediu a ação padrão, faça agora
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData(elem)) {

				// Chama um método DOM nativo no destino com o mesmo nome do evento.
				// Não faça ações padrão na janela, é onde estão as variáveis ​​globais (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Não aciona novamente um evento onFOO quando chamamos seu método FOO()
					tmp = elem[ontipo];

					if (tmp) {
						elem[ ontype ] = null;
					}

					// Impede o re-disparo do mesmo evento, pois já o borbulhamos acima
					jQuery.event.triggered = tipo;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ tipo ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = indefinido;

					if (tmp) {
						elem[ontipo] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Pega carona em um evento doador para simular um evento diferente
	// Usado apenas para eventos `focus(in | out)`
	simular: function( tipo, elem, evento ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			evento,
			{
				tipo: tipo,
				isSimulado: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

});

jQuery.fn.extend({

	gatilho: função( tipo, dados ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if (elem) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


// Suporte: Firefox <=44
// Firefox não tem eventos focus(in | out)
// Ticket relacionado - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Suporte: Chrome <=48 - 49, Safari <=9,0 - 9,1
// os eventos focus(in | out) são acionados após os eventos de foco e desfoque,
// que é violação de especificação - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Ticket relacionado - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if (!support.focusin) {
	jQuery.each( {focus: "focusin", blur: "focusout" }, function(orig, fix) {

		// Anexar um único manipulador de captura no documento enquanto alguém deseja focalizar/desfocar
		var manipulador = function(evento) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ correção ] = {
			configuração: função() {

				// Handle: nós regulares (via `this.ownerDocument`), janela
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || este.documento || isto,
					anexa = dataPriv.access(doc, fix);

				if ( !anexa ) {
					doc.addEventListener( original, manipulador, true );
				}
				dataPriv.access( doc, fix, ( anexa || 0 ) + 1 );
			},
			desmontagem: function() {
				var doc = this.ownerDocument || este.documento || isto,
					anexos = dataPriv.access(doc, fix ) - 1;

				if ( !anexa ) {
					doc.removeEventListener( original, manipulador, true );
					dataPriv.remove(doc, fix);

				} senão {
					dataPriv.access(doc, fix, attachs);
				}
			}
		};
	});
}
var local = janela.local;

var nonce = { guid: Date.now() };

var consulta = ( /\?/ );



// Análise de xml entre navegadores
jQuery.parseXML = function(dados) {
	var xml, parserErrorElem;
	if ( !dados || tipodedados !== "string" ) {
		retornar nulo;
	}

	// Suporte: IE 9 - 11 apenas
	// IE lança parseFromString com entrada inválida.
	tentar {
		xml = ( new window.DOMParser() ).parseFromString( dados, "texto/xml" );
	} pegar ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if (!xml || parserErrorElem) {
		jQuery.error( "XML inválido: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ):
				dados
		));
	}
	retornar xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, tradicional, add ) {
	nome da var;

	if ( Array.isArray( obj ) ) {

		// Serializar o item do array.
		jQuery.each( obj, function( i, v ) {
			if (tradicional || rbracket.test(prefix)) {

				// Trata cada item do array como um escalar.
				add( prefixo, v );

			} senão {

				// O item não é escalar (array ou objeto), codifique seu índice numérico.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					tradicional,
					adicionar
				);
			}
		});

	} else if ( !tradicional && toType( obj ) === "objeto" ) {

		// Serializar o item do objeto.
		for (nome em obj) {
			buildParams( prefix + "[" + nome + "]", obj[ nome ], tradicional, add );
		}

	} senão {

		// Serializar o item escalar.
		add( prefixo, obj );
	}
}

// Serialize um array de elementos de formulário ou um conjunto de
// chave/valores em uma string de consulta
jQuery.param = function(a, tradicional) {
	prefixo var,
		s = [],
		add = function( chave, valorOrFunção ) {

			// Se value for uma função, invoque-a e use seu valor de retorno
			var valor = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valorOrFunção;

			s[ s.length ] = encodeURIComponent( chave ) + "=" +
				encodeURIComponent( valor == null ? "" : valor );
		};

	if ( a == null ) {
		Retorna "";
	}

	// Se um array foi passado, suponha que seja um array de elementos de formulário.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serializar os elementos do formulário
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} senão {

		// Se tradicional, codifique da maneira "antiga" (a maneira 1.3.2 ou mais antiga
		// fez isso), caso contrário codifique os parâmetros recursivamente.
		for (prefixo em a) {
			buildParams( prefix, a[ prefix ], tradicional, add );
		}
	}

	// Retorna a serialização resultante
	return s.join("&");
};

jQuery.fn.extend({
	serializar: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Pode adicionar propHook para "elementos" para filtrar ou adicionar elementos de formulário
			var elementos = jQuery.prop( this, "elementos" );
			elementos de retorno? jQuery.makeArray(elementos): this;
		} ).filter( function() {
			var tipo = this.type;

			// Use .is( ":disabled" ) para que fieldset[disabled] funcione
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if (val == null) {
				retornar nulo;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { nome: elem.name, valor: val.replace( rCRLF, "\r\n" ) };
				});
			}

			return { nome: elem.name, valor: val.replace( rCRLF, "\r\n" ) };
		} ).pegue();
	}
});


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	cabeçalhos = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: detecção de protocolo local
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoConteúdo = /^(?:GET|HEAD)$/,
	rprotocolo = /^\/\//,

	/* Pré-filtros
	 * 1) Eles são úteis para introduzir dataTypes personalizados (veja ajax/jsonp.js para um exemplo)
	 * 2) Estes são chamados:
	 * - ANTES de pedir um transporte
	 * - APÓS a serialização do parâmetro (s.data é uma string se s.processData for true)
	 * 3) a chave é o dataType
	 * 4) o símbolo catchall "*" pode ser usado
	 * 5) a execução começará com transport dataType e DEPOIS continuará até "*" se necessário
	 */
	pré-filtros = {},

	/* Transporta ligações
	 * 1) chave é o dataType
	 * 2) o símbolo catchall "*" pode ser usado
	 * 3) a seleção começará com transport dataType e depois vai para "*" se necessário
	 */
	transportes = {},

	// Evite a sequência de caracteres de prólogo de comentário (trac-10098); deve apaziguar o fiapo e evitar a compressão
	allTypes = "*/".concat( "*" ),

	// Marca âncora para analisar a origem do documento
	originAnchor = document.createElement( "a" );

originAnchor.href = localização.href;

// Base "construtor" para jQuery.ajaxPrefilter e jQuery.ajaxTransport
function addToPrefiltersOrTransports( estrutura ) {

	// dataTypeExpression é opcional e o padrão é "*"
	return function(dataTypeExpression, func) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var tipo de dados,
			e = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// Para cada dataType no dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Anexar se solicitado
				if ( tipo de dados[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( estrutura[ dataType ] = estrutura[ dataType ] || [] ).unshift( func );

				// Caso contrário, anexa
				} senão {
					( estrutura[ dataType ] = estrutura[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Função de inspeção básica para pré-filtros e transportes
function inspectPrefiltersOrTransports( estrutura, opções, originalOptions, jqXHR ) {

	var inspecionado = {},
		searchTransport = ( estrutura === transportes );

	function inspecionar(dataType) {
		var selecionado;
		inspecionado[ dataType ] = true;
		jQuery.each( estrutura[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( opções, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspecionar(dataTypeOrTransport);
				retorna falso;
			} else if (procurando Transporte) {
				return !( selecionado = dataTypeOrTransport );
			}
		});
		retorno selecionado;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspecionar( "*" );
}

// Uma extensão especial para opções ajax
// que aceita opções "planas" (não deve ser estendida)
// Corrige trac-9887
function ajaxExtend( target, src ) {
	chave var, profunda,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for (chave em src) {
		if (src[ chave ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	se (profundo) {
		jQuery.extend( true, target, deep );
	}

	alvo de retorno;
}

/* Manipula as respostas a uma solicitação ajax:
 * - encontra o dataType correto (intermediou entre o tipo de conteúdo e o tipo de dados esperado)
 * - retorna a resposta correspondente
 */
function ajaxHandleResponses( s, jqXHR, respostas ) {

	var ct, tipo, finalDataType, firstDataType,
		conteúdo = s.conteúdo,
		dataTypes = s.dataTypes;

	// Remova o dataType automático e obtenha o tipo de conteúdo no processo
	while ( tipos de dados[ 0 ] === "*" ) {
		dataTypes.shift();
		if (ct === indefinido) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Verifica se estamos lidando com um tipo de conteúdo conhecido
	se (ct) {
		for (digite o conteúdo) {
			if (conteúdo[tipo] &&conteúdo[tipo].test(ct)) {
				dataTypes.unshift( type );
				parar;
			}
		}
	}

	// Verifica se temos uma resposta para o dataType esperado
	if ( dataTypes[ 0 ] em respostas ) {
		finalDataType = dataTypes[ 0 ];
	} senão {

		// Tente dataTypes conversíveis
		for (digite as respostas) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = tipo;
				parar;
			}
			if (!firstDataType) {
				firstDataType = tipo;
			}
		}

		// Ou apenas use o primeiro
		finalDataType = finalDataType || firstDataType;
	}

	// Se encontramos um dataType
	// Adicionamos o dataType à lista, se necessário
	// e retorna a resposta correspondente
	if (finalDataType) {
		if (finalDataType!== dataTypes[ 0]) {
			dataTypes.unshift( finalDataType );
		}
		return respostas[finalDataType];
	}
}

/* Conversões em cadeia de acordo com a solicitação e a resposta original
 * Também define os campos responseXXX na instância jqXHR
 */
function ajaxConvert( s, resposta, jqXHR, isSuccess ) {
	var conv2, atual, conv, tmp, anterior,
		conversores = {},

		// Trabalhe com uma cópia de dataTypes caso precisemos modificá-lo para conversão
		dataTypes = s.dataTypes.slice();

	// Cria um mapa de conversores com chaves minúsculas
	if ( tipos de dados[ 1 ] ) {
		for (conv em s.converters) {
			conversores[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	atual = dataTypes.shift();

	// Converte para cada dataType sequencial
	enquanto (atual) {

		if ( s.responseFields[ atual ] ) {
			jqXHR[ s.responseFields[ atual ] ] = resposta;
		}

		//Aplica o dataFilter se fornecido
		if ( !prev && isSuccess && s.dataFilter ) {
			resposta = s.dataFilter(resposta, s.dataType);
		}

		anterior = atual;
		atual = dataTypes.shift();

		se (atual) {

			// Só há trabalho a fazer se o dataType atual não for automático
			if ( atual === "*" ) {

				atual = anterior;

			// Converte a resposta se o dataType anterior não for automático e for diferente do atual
			} else if ( anterior !== "*" && anterior !== atual ) {

				// Busca um conversor direto
				conv = conversores[ anterior + " " + atual ] || conversores[ "* " + atual ];

				// Se nenhum for encontrado, procura um par
				if (!conv) {
					for (conv2 nos conversores) {

						// Se conv2 envia corrente
						tmp = conv2.split( " " );
						if (tmp[1] === atual){

							// Se anterior puder ser convertido em entrada aceita
							conv = conversores[ anterior + " " + tmp[ 0 ] ] ||
								conversores[ "* " + tmp[ 0 ] ];
							if (conv) {

								// Conversores de equivalência de condensação
								if (conv === true) {
									conv = conversores[ conv2 ];

								// Caso contrário, insira o dataType intermediário
								} else if (conversores[conv2] !== true) {
									atual = tmp[0];
									dataTypes.unshift( tmp[ 1 ] );
								}
								parar;
							}
						}
					}
				}

				// Aplicar conversor (se não for uma equivalência)
				if (conv!== true) {

					// A menos que os erros possam aparecer em bolhas, capture-os e devolva-os
					if (conv && s.throws) {
						resposta = conv(resposta);
					} senão {
						tentar {
							resposta = conv(resposta);
						} pegar ( e ) {
							Retorna {
								estado: "parsererror",
								erro: conv ? e : "Sem conversão de " + anterior + " para " + atual
							};
						}
					}
				}
			}
		}
	}

	return { estado: "sucesso", dados: resposta };
}

jQuery.extend({

	// Contador para manter o número de consultas ativas
	ativo: 0,

	// Cache de cabeçalho modificado pela última vez para a próxima solicitação
	última modificação: {},
	etag: {},

	ajaxSettings: {
		url: local.href,
		digite: "GET",
		isLocal: rlocalProtocol.test(local.protocolo),
		global: verdade,
		processData: true,
		assíncrono: verdadeiro,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		tempo limite: 0,
		dados: nulo,
		dataType: null,
		nome de usuário: null,
		senha: null,
		cache: nulo,
		lança: falso,
		tradicional: falso,
		cabeçalhos: {},
		*/

		aceita: {
			"*": todos os tipos,
			texto: "texto/simples",
			html: "texto/html",
			xml: "aplicativo/xml, texto/xml",
			json: "aplicativo/json, texto/javascript"
		},

		conteúdo: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		campos de resposta: {
			xml: "respostaXML",
			texto: "respostaTexto",
			json: "respostaJSON"
		},

		// Conversores de dados
		// Chaves separam os tipos de origem (ou catchall "*") e de destino com um único espaço
		conversores: {

			// Converte qualquer coisa em texto
			"* texto": String,

			// Texto para html (true = sem transformação)
			"texto html": verdadeiro,

			// Avalia o texto como uma expressão json
			"texto json": JSON.parse,

			// Analisa o texto como xml
			"texto xml": jQuery.parseXML
		},

		// Para opções que não devem ser estendidas profundamente:
		// você pode adicionar suas próprias opções personalizadas aqui se
		// e quando você cria um que não deveria ser
		// extensão profunda (veja ajaxExtend)
		flatOptions: {
			URL: verdadeiro,
			contexto: verdadeiro
		}
	},

	// Cria um objeto de configurações completo no destino
	// com os campos ajaxSettings e settings.
	// Se o destino for omitido, grava em ajaxSettings.
	ajaxSetup: function( target, settings ) {
		configurações de retorno?

			// Construindo um objeto de configurações
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ):

			// Estendendo ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports(transportes),

	// Método principal
	ajax: function(url, opções) {

		// Se url for um objeto, simula a assinatura pré-1.5
		if ( tipo de url === "objeto" ) {
			opções = url;
			url = indefinido;
		}

		// Força as opções a serem um objeto
		opções = opções || {};

		var transporte,

			// URL sem parâmetro anti-cache
			cacheURL,

			// Cabeçalhos de resposta
			responseHeadersString,
			cabeçalhos de resposta,

			// identificador de tempo limite
			timeoutTimer,

			// Limpeza de URL var
			urlÂncora,

			// Estado da solicitação (torna-se falso no envio e verdadeiro após a conclusão)
			concluído,

			// Para saber se eventos globais devem ser despachados
			fireGlobals,

			// Variável de loop
			eu,

			// parte sem cache da url
			sem cache,

			// Cria o objeto de opções final
			s = jQuery.ajaxSetup( {}, opções ),

			// Contexto de retorno de chamada
			callbackContext = s.contexto || s,

			// O contexto para eventos globais é callbackContext se for um nó DOM ou uma coleção jQuery
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ):
				jQuery.event,

			// Adiados
			adiado = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "uma vez memória" ),

			// Callbacks dependentes de status
			statusCode = s.statusCode || {},

			// Cabeçalhos (são enviados todos de uma vez)
			requestHeaders = {},
			requestHeadersNames = {},

			// Mensagem de aborto padrão
			strAbort = "cancelado",

			//Falso xhr
			jqXHR = {
				estadopronto: 0,

				// Constrói a tabela hash de cabeçalhos se necessário
				getResponseHeader: function(key) {
					var partida;
					se (concluído) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Sequência bruta
				getAllResponseHeaders: function() {
					retorno concluído? responseHeadersString : null;
				},

				// Armazena o cabeçalho em cache
				setRequestHeader: function( nome, valor) {
					if (completo == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || nome;
						requestHeaders[ nome ] = valor;
					}
					devolva isso;
				},

				// Substitui o cabeçalho do tipo de conteúdo da resposta
				overrideMimeType: function( type ) {
					if (completo == null ) {
						s.mimeType = tipo;
					}
					devolva isso;
				},

				// Callbacks dependentes de status
				statusCode: function(mapa){
					código var;
					if (mapa) {
						se (concluído) {

							//Executa os retornos de chamada apropriados
							jqXHR.always( map[ jqXHR.status ] );
						} senão {

							// Adiciona com preguiça os novos callbacks de uma forma que preserva os antigos
							for (código no mapa) {
								statusCode[ código ] = [ statusCode[ código ], map[ código ] ];
							}
						}
					}
					devolva isso;
				},

				// Cancela a requisição
				abortar: function(statusText) {
					var finalText = statusText || strAbort;
					if (transporte) {
						transport.abort(finalText);
					}
					feito( 0, texto final );
					devolva isso;
				}
			};

		// Anexar deferidos
		deferred.promise( jqXHR );

		// Adiciona protocolo se não for fornecido (pré-filtros podem esperar isso)
		// Manipula url falso no objeto de configurações (trac-10093: consistência com assinatura antiga)
		// Também usamos o parâmetro url se disponível
		s.url = ( ( url || s.url || localização.href ) + "" )
			.replace( rprotocolo, localização.protocolo + "//" );

		// Opção de método de alias para digitar conforme ticket trac-12004
		s.tipo = opções.método || opções.tipo || s.método || s.tipo;

		// Extraia a lista de tipos de dados
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [""];

		// Uma solicitação entre domínios está em ordem quando a origem não corresponde à origem atual.
		if (s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Suporte: IE <=8 - 11, Edge 12 - 15
			// IE lança exceção ao acessar a propriedade href se url estiver malformado,
			// por exemplo, http://example.com:80x/
			tentar {
				urlÂncora.href = s.url;

				// Suporte: IE <=8 - 11 apenas
				// A propriedade do host da âncora não está definida corretamente quando s.url é relativo
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} pegar ( e ) {

				// Se houver um erro ao analisar a URL, suponha que seja crossDomain,
				// pode ser rejeitado pelo transporte se for inválido
				s.crossDomain = true;
			}
		}

		// Converte dados se ainda não for uma string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.tradicional );
		}

		//Aplica pré-filtros
		inspectPrefiltersOrTransports( pré-filtros, s, opções, jqXHR );

		// Se a solicitação foi abortada dentro de um pré-filtro, pare por aí
		se (concluído) {
			retornar jqXHR;
		}

		// Podemos disparar eventos globais a partir de agora se solicitado
		// Não dispara eventos se jQuery.event estiver indefinido em um cenário de uso AMD (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Preste atenção a um novo conjunto de solicitações
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Maiúsculas o tipo
		s.type = s.type.toUpperCase();

		// Determina se a requisição tem conteúdo
		s.hasContent = !rnoContent.test( s.type );

		// Salve a URL caso estejamos brincando com o If-Modified-Since
		// e/ou cabeçalho If-None-Match mais tarde
		// Remove hash para simplificar a manipulação de URL
		cacheURL = s.url.replace( rhash, "" );

		// Mais opções de tratamento para requisições sem conteúdo
		if (!s.hasContent) {

			// Lembre-se do hash para que possamos colocá-lo de volta
			uncached = s.url.slice( cacheURL.length );

			// Se os dados estiverem disponíveis e devem ser processados, anexar dados ao url
			if ( s.data && ( s.processData || typeof s.data === "string")) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove os dados para que não sejam usados ​​em uma eventual nova tentativa
				excluir s.data;
			}

			// Adiciona ou atualiza o parâmetro anti-cache se necessário
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace(rantiCache, "$1");
				uncached = (rquery.test(cacheURL)? "&": "?") + "_=" + (nonce.guid++) +
					sem cache;
			}

			// Coloca hash e anti-cache na URL que será solicitada (gh-1732)
			s.url = cacheURL + sem cache;

		// Altere '%20' para '+' se for codificado no conteúdo do corpo do formulário (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "").indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Configura o cabeçalho If-Modified-Since e/ou If-None-Match, se estiver no modo ifModified.
		if ( s.ifModificado ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Define o cabeçalho correto, se os dados estiverem sendo enviados
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Defina o cabeçalho Accepts para o servidor, dependendo do dataType
		jqXHR.setRequestHeader(
			"Aceitar",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ):
				s.aceita[ "*" ]
		);

		// Verifica a opção de cabeçalhos
		for (i em s.headers) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Permitir cabeçalhos/mimetypes personalizados e abortar antecipadamente
		if ( s.antesEnviar &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || complete ) ) {

			// Aborta se ainda não tiver feito e retorna
			return jqXHR.abort();
		}

		// Abortar não é mais um cancelamento
		strAbort = "abortar";

		//Instala callbacks em deferreds
		completeDeferred.add( s.complete );
		jqXHR.done(s.sucesso);
		jqXHR.fail(s.erro);

		// Pega o transporte
		transporte = inspectPrefiltersOrTransports( transportes, s, opções, jqXHR );

		// Se não houver transporte, abortamos automaticamente
		if (!transporte) {
			done( -1, "Sem Transporte" );
		} senão {
			jqXHR.readyState = 1;

			//Envia evento global
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// Se a solicitação foi abortada dentro do ajaxSend, pare por aí
			se (concluído) {
				retornar jqXHR;
			}

			// Tempo esgotado
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort("tempo limite");
				}, s.tempo limite);
			}

			tentar {
				completado = falso;
				transport.send( requestHeaders, done );
			} pegar ( e ) {

				// Relançar exceções pós-conclusão
				se (concluído) {
					jogue e;
				}

				// Propaga outros como resultados
				feito( -1, e );
			}
		}

		//Retorno de chamada para quando tudo estiver pronto
		function done(status, nativeStatusText, answers, headers) {
			var isSuccess, sucesso, erro, resposta, modificado,
				statusText = nativeStatusText;

			// Ignora invocações repetidas
			se (concluído) {
				Retorna;
			}

			completado = verdadeiro;

			//Limpa o tempo limite se existir
			if (timeoutTimer) {
				window.clearTimeout( timeoutTimer );
			}

			// Desreferencia o transporte para coleta de lixo antecipada
			// (não importa por quanto tempo o objeto jqXHR será usado)
			transporte = indefinido;

			//Cabeçalhos de resposta de cache
			responseHeadersString = cabeçalhos || "";

			// Configura o estado pronto
			jqXHR.readyState = status > 0 ? 4:0;

			// Determina se foi bem sucedido
			isSucesso = status >= 200 && status < 300 || estado === 304;

			// Obtém dados de resposta
			if (respostas) {
				resposta = ajaxHandleResponses(s, jqXHR, respostas);
			}

			// Use um conversor noop para script ausente, mas não se jsonp
			if ( !isSucesso &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "script de texto" ] = function() {};
			}

			// Converta não importa o que aconteça (dessa forma, os campos responseXXX são sempre definidos)
			resposta = ajaxConvert( s, resposta, jqXHR, isSuccess );

			// Se for bem sucedido, trata o encadeamento de tipos
			if ( isSucesso ) {

				// Configura o cabeçalho If-Modified-Since e/ou If-None-Match, se estiver no modo ifModified.
				if ( s.ifModificado ) {
					modificado = jqXHR.getResponseHeader( "Última modificação" );
					if ( modificado ) {
						jQuery.lastModified[ cacheURL ] = modificado;
					}
					modificado = jqXHR.getResponseHeader( "etag" );
					if ( modificado ) {
						jQuery.etag[ cacheURL ] = modificado;
					}
				}

				// se não houver conteúdo
				if (status === 204 || s.type === "HEAD" ) {
					statusText = "sem conteúdo";

				// se não for modificado
				} else if (status === 304) {
					statusText = "não modificado";

				// Se tivermos dados, vamos convertê-los
				} senão {
					statusText = resposta.estado;
					sucesso = resposta.dados;
					erro = resposta.erro;
					isSucesso = !erro;
				}
			} senão {

				// Extraia o erro do statusText e normalize para não abortar
				erro = statusText;
				if (status || !statusText) {
					statusText = "erro";
					if (status < 0) {
						estado = 0;
					}
				}
			}

			// Define dados para o objeto xhr falso
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Sucesso/Erro
			if ( isSucesso ) {
				deferred.resolveWith( callbackContext, [ sucesso, statusText, jqXHR ] );
			} senão {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, erro ] );
			}

			// Callbacks dependentes de status
			jqXHR.statusCode(statusCode);
			código de estado = indefinido;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? sucesso: erro]);
			}

			// Completo
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Manipula o contador global AJAX
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		retornar jqXHR;
	},

	getJSON: function(url, data, callback) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function(url, callback) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Desloca os argumentos se o argumento de dados foi omitido
		if ( isFunction( data ) ) {
			tipo = tipo || ligue de volta;
			retorno = dados;
			dados = indefinido;
		}

		// A url pode ser um objeto de opções (que então deve ter .url)
		return jQuery.ajax(jQuery.extend({
			URL: URL,
			tipo: método,
			dataType: tipo,
			dados: dados,
			sucesso: retorno
		}, jQuery.isPlainObject( url ) && url ) );
	};
});

jQuery.ajaxPrefilter( function(s) {
	var i;
	for (i em s.headers) {
		if (i.toLowerCase() === "tipo de conteúdo" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
});


jQuery._evalUrl = function(url, opções, doc) {
	return jQuery.ajax({
		URL: URL,

		// Torne isso explícito, pois o usuário pode substituir isso por meio de ajaxSetup (trac-11264)
		digite: "GET",
		dataType: "script",
		cache: verdadeiro,
		assíncrono: falso,
		global: falso,

		// Só avalia a resposta se for bem sucedida (gh-4126)
		// dataFilter não é invocado para respostas de falha, então use-o em vez disso
		// do conversor padrão é desajeitado, mas funciona.
		conversores: {
			"script de texto": function() {}
		},
		dataFilter: function(resposta) {
			jQuery.globalEval(resposta, opções, doc);
		}
	});
};


jQuery.fn.extend({
	wrapAll: function(html){
		var envoltório;

		if ( this[ 0 ] ) {
			if ( isFunction ( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// Os elementos para envolver o alvo
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = este;

				while (elem.firstElementChild) {
					elem = elem.firstElementChild;
				}

				retornar ele;
			} ).append( this );
		}

		devolva isso;
	},

	wrapInner: function(html){
		if ( isFunction ( html ) ) {
			return this.each( function(i){
				jQuery( this ).wrapInner( html.call( this, i ) );
			});
		}

		return this.each( function() {
			var self = jQuery( this ),
				conteúdo = self.contents();

			if (conteúdo.comprimento) {
				content.wrapAll(html);

			} senão {
				self.append(html);
			}
		});
	},

	wrap: function(html){
		var htmlIsFunction = isFunction(html);

		return this.each( function(i){
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ): html );
		});
	},

	desempacotar: function(seletor) {
		this.parent( selector ).not( "corpo" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		});
		devolva isso;
	}
});


jQuery.expr.pseudos.hidden = function(elem) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function(elem) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	tentar {
		retornar nova janela.XMLHttpRequest();
	} pegar ( e ) {}
};

var xhrSuccessStatus = {

		// Protocolo de arquivo sempre produz código de status 0, suponha 200
		0: 200,

		// Suporte: IE <=9 apenas
		// trac-1450: às vezes o IE retorna 1223 quando deveria ser 204
		1223: 204
	},
	xhrSuportado = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" em xhrSupported );
support.ajax = xhrSuportado = !!xhrSuportado;

jQuery.ajaxTransport( function(opções) {
	var callback, errorCallback;

	// Domínio cruzado permitido somente se suportado por XMLHttpRequest
	if ( support.cors || xhrSuportado && !options.crossDomain ) {
		Retorna {
			send: function( headers, complete ) {
				var eu,
					xhr = opções.xhr();

				xhr.open(
					opções.tipo,
					opções.url,
					opções.async,
					opções.nome de usuário,
					opções.senha
				);

				// Aplicar campos personalizados, se fornecidos
				if (opções.xhrFields) {
					for (i em options.xhrFields) {
						xhr[ i ] = opções.xhrFields[ i ];
					}
				}

				// Sobrescreve o tipo mime se necessário
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// cabeçalho X-Requested-With
				// Para solicitações entre domínios, as condições para uma simulação são
				// semelhante a um quebra-cabeça, nós simplesmente nunca o configuramos para ter certeza.
				// (sempre pode ser definido por solicitação ou até mesmo usando ajaxSetup)
				// Para solicitações de mesmo domínio, não alterará o cabeçalho se já fornecido.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Definir cabeçalhos
				for (i nos cabeçalhos) {
					xhr.setRequestHeader(i, cabeçalhos[i]);
				}

				// Ligue de volta
				retorno de chamada = function(tipo){
					função de retorno(){
						if (retorno de chamada) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( tipo === "abortar" ) {
								xhr.abort();
							} else if ( tipo === "erro" ) {

								// Suporte: IE <=9 apenas
								// Em um aborto nativo manual, o IE9 lança
								// erros em qualquer acesso de propriedade que não seja readyState
								if ( typeof xhr.status !== "number" ) {
									complete(0, "erro");
								} senão {
									completo(

										// Arquivo: protocolo sempre gera status 0; veja trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} senão {
								completo(
									xhrSuccessStatus[ xhr.status] || xhr.status,
									xhr.statusText,

									// Suporte: IE <=9 apenas
									// IE9 não tem XHR2 mas lança em binário (trac-11426)
									// Para não-texto XHR2, deixe o chamador lidar com isso (gh-2498)
									( xhr.responseType || "texto" ) !== "texto" ||
									typeof xhr.responseText !== "string" ?
										{binário: xhr.response}:
										{texto: xhr.responseText},
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Ouvir eventos
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "erro" );

				// Suporte: apenas IE 9
				// Usa onreadystatechange para substituir onabort
				// para lidar com abortos não capturados
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} senão {
					xhr.onreadystatechange = function() {

						// Verifica readyState antes do tempo limite conforme ele muda
						if ( xhr.readyState === 4 ) {

							// Permitir que onerror seja chamado primeiro,
							// mas isso não irá lidar com um aborto nativo
							// Além disso, salve errorCallback em uma variável
							// como xhr.onerror não pode ser acessado
							window.setTimeout( function() {
								if (retorno de chamada) {
									errorCallback();
								}
							});
						}
					};
				}

				//Cria o callback abort
				callback = callback("abortar");

				tentar {

					// Envie a solicitação (isso pode gerar uma exceção)
					xhr.send( options.hasContent && options.data || null );
				} pegar ( e ) {

					// trac-14683: Relançar apenas se isso ainda não tiver sido notificado como um erro
					if (retorno de chamada) {
						jogue e;
					}
				}
			},

			abortar: function() {
				if (retorno de chamada) {
					ligue de volta();
				}
			}
		};
	}
});




// Impede a execução automática de scripts quando nenhum dataType explícito foi fornecido (consulte gh-2432)
jQuery.ajaxPrefilter( function(s) {
	if (s.crossDomain) {
		s.contents.script = false;
	}
});

//Instala o script dataType
jQuery.ajaxSetup({
	aceita: {
		script: "texto/javascript, aplicativo/javascript, " +
			"aplicativo/ecmascript, aplicativo/x-ecmascript"
	},
	conteúdo: {
		script: /\b(?:java|ecma)script\b/
	},
	conversores: {
		"script de texto": function(texto) {
			jQuery.globalEval(texto);
			texto de retorno;
		}
	}
});

// Manipula o caso especial do cache e o crossDomain
jQuery.ajaxPrefilter( "script", function(s) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if (s.crossDomain) {
		s.type = "GET";
	}
});

// Ligar transporte de hack de tag de script
jQuery.ajaxTransport( "script", function(s) {

	// Este transporte lida apenas com requisições de domínio cruzado ou forçadas por attrs
	if ( s.crossDomain || s.scriptAttrs ) {
		script var, retorno de chamada;
		Retorna {
			enviar: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr(s.scriptAttrs || {} )
					.prop({ charset: s.scriptCharset, src: s.url } )
					.on( "erro de carregamento", callback = function( evt ) {
						script.remover();
						retorno = null;
						if (evt) {
							complete( evt.type === "erro" ? 404 : 200, evt.type );
						}
					});

				// Use a manipulação nativa do DOM para evitar nosso truque do domManip AJAX
				document.head.appendChild( script[ 0 ] );
			},
			abortar: function() {
				if (retorno de chamada) {
					ligue de volta();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Configurações padrão do jsonp
jQuery.ajaxSetup({
	jsonp: "retorno de chamada",
	jsonpCallback: function() {
		var retorno de chamada = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		retorno de chamada;
	}
});

// Detecta, normaliza opções e instala callbacks para solicitações jsonp
jQuery.ajaxPrefilter( "json jsonp", function(s, originalSettings, jqXHR) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url":
			typeof s.data === "string" &&
				( s.contentType || "")
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test(s.data) && "dados"
		);

	// Trata se o tipo de dado esperado é "jsonp" ou temos um parâmetro para definir
	if (jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Obtém o nome do retorno de chamada, lembrando o valor preexistente associado a ele
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		//Inserir callback em url ou dados de formulário
		if (jsonProp) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use o conversor de dados para recuperar o json após a execução do script
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " não foi chamado" );
			}
			return responseContainer[ 0 ];
		};

		// Força tipo de dados json
		s.dataTypes[ 0 ] = "json";

		//Instala o retorno de chamada
		overwritten = window[ callbackName ];
		janela[ callbackName ] = function() {
			responseContainer = argumentos;
		};

		// Função de limpeza (dispara após conversores)
		jqXHR.always( function() {

			// Se o valor anterior não existia - remova-o
			if ( sobrescrito === undefined ) {
				jQuery( janela ).removeProp( callbackName );

			// Caso contrário, restaura o valor preexistente
			} senão {
				window[ callbackName ] = sobrescrito;
			}

			// Salva de volta como grátis
			if ( s[ callbackName ] ) {

				// Certifique-se de que reutilizar as opções não estraga as coisas
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Salva o nome do callback para uso futuro
				oldCallbacks.push( callbackName );
			}

			// Chama se for uma função e temos uma resposta
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = sobrescrito = indefinido;
		});

		// Delegado ao script
		return "roteiro";
	}
});




// Suporte: apenas Safari 8
// Nos documentos do Safari 8 criados via document.implementation.createHTMLDocument
// recolher formulários irmãos: o segundo se torna filho do primeiro.
// Por isso, essa medida de segurança deve ser desabilitada no Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var corpo = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// O argumento "data" deve ser uma string de html
// context (opcional): Se especificado, o fragmento será criado neste contexto,
// padrão para documento
// keepScripts (opcional): Se verdadeiro, incluirá os scripts passados ​​na string html
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		Retorna [];
	}
	if ( tipo de contexto === "boolean" ) {
		keepScripts = contexto;
		contexto = falso;
	}

	var base, analisado, scripts;

	if ( !contexto ) {

		// Impede que scripts ou manipuladores de eventos embutidos sejam executados imediatamente
		// usando document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Define o href base para o documento criado
			// então quaisquer elementos analisados ​​com URLs
			// são baseados na URL do documento (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} senão {
			contexto = documento;
		}
	}

	analisado = rsingleTag.exec(dados);
	scripts = !keepScripts && [];

	// Marca única
	if ( analisado ) {
		return [ context.createElement( analisado[ 1 ] ) ];
	}

	analisado = buildFragment( [ dados ], contexto, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], analisado.childNodes );
};


/**
 * Carregar um URL em uma página
 */
jQuery.fn.load = function( url, params, callback ) {
	seletor var, tipo, resposta,
		eu = isso,
		off = url.indexOf( " " );

	if (desligado > -1) {
		seletor = stripAndCollapse( url.slice( off ) );
		url = url.fatia(0, off);
	}

	// Se for uma função
	if ( isFunction( params ) ) {

		// Assumimos que é o retorno de chamada
		retorno de chamada = params;
		parametros = indefinido;

	// Caso contrário, cria uma string de parâmetro
	} else if (params && typeof params === "objeto" ) {
		tipo = "POST";
	}

	// Se tivermos elementos para modificar, faça a requisição
	if ( self.length > 0 ) {
		jQuery.ajax({
			URL: URL,

			// Se a variável "type" for indefinida, então o método "GET" será usado.
			// Torna o valor deste campo explícito desde
			// o usuário pode substituí-lo através do método ajaxSetup
			tipo: tipo || "PEGUE",
			tipo de dados: "html",
			dados: parâmetros
		} ).done( function(respostaTexto) {

			// Salva a resposta para uso no callback completo
			resposta = argumentos;

			self.html(seletor ?

				// Se um seletor foi especificado, localize os elementos corretos em uma div fictícia
				// Excluir scripts para evitar erros 'Permission Denied' do IE
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ):

				// Caso contrário, use o resultado completo
				respostaTexto);

		// Se a requisição for bem sucedida, esta função obtém "data", "status", "jqXHR"
		// mas eles são ignorados porque a resposta foi definida acima.
		// Se falhar, esta função obtém "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, resposta || [ jqXHR.responseText, status, jqXHR ] );
			});
		});
	}

	devolva isso;
};




jQuery.expr.pseudos.animated = function(elem) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).comprimento;
};




jQuery.offset = {
	setOffset: function( elem, opções, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calcularPosition,
			posição = jQuery.css(elem, "posição"),
			curElem = jQuery(elem),
			adereços = {};

		// Define a posição primeiro, caso superior/esquerda sejam definidos mesmo no elemento estático
		if ( posição === "estático") {
			elem.style.position = "relativo";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "esquerda" );
		calcularPosição = ( posição === "absoluto" || posição === "fixo") &&
			( curCSSTop + curCSLeft ).indexOf( "auto" ) > -1;

		// Precisa ser capaz de calcular a posição se
		// superior ou esquerdo é automático e a posição é absoluta ou fixa
		if ( calcularPosição) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} senão {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( opções ) ) {

			// Use jQuery.extend aqui para permitir a modificação do argumento de coordenadas (gh-1848)
			opções = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if (opções.top!= null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "usando" nas opções ) {
			options.using.call( elem, props );

		} senão {
			curElem.css(props);
		}
	}
};

jQuery.fn.extend({

	// offset() relaciona a caixa de borda de um elemento com a origem do documento
	deslocamento: function(opções) {

		// Preserva o encadeamento para o setter
		if (argumentos.comprimento) {
			opções de retorno === indefinido?
				isto :
				this.each( function(i){
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var rect, ganhar,
			ele = this[ 0 ];

		if ( !elem ) {
			Retorna;
		}

		// Retorna zeros para elementos desconectados e ocultos (exibição: nenhum) (gh-2310)
		// Suporte: IE <=11 apenas
		// Executando getBoundingClientRect em um
		// nó desconectado no IE lança um erro
		if (!elem.getClientRects().length) {
			return { topo: 0, esquerda: 0 };
		}

		// Obtém a posição relativa ao documento adicionando a rolagem da viewport ao gBCR relativo à viewport
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		Retorna {
			topo: rect.top + win.pageYOffset,
			esquerda: rect.left + win.pageXOffset
		};
	},

	// position() relaciona a caixa de margem de um elemento à caixa de preenchimento de seu pai de deslocamento
	// Isso corresponde ao comportamento do posicionamento absoluto do CSS
	posição: função(){
		if ( !this[ 0 ] ) {
			Retorna;
		}

		var offsetParent, offset, doc,
			ele = this[ 0 ],
			parentOffset = { topo: 0, esquerda: 0 };

		// position:fixed elementos são deslocados da viewport, que sempre tem deslocamento zero
		if ( jQuery.css(elem, "posição" ) === "fixo" ) {

			// Assumir position:fixed implica a disponibilidade de getBoundingClientRect
			deslocamento = elem.getBoundingClientRect();

		} senão {
			deslocamento = this.offset();

			// Conta para o pai de deslocamento *real*, que pode ser o documento ou seu elemento raiz
			// quando um elemento posicionado estaticamente é identificado
			doc = elem.proprietárioDocumento;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorpora bordas em seu deslocamento, pois estão fora de sua origem de conteúdo
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtrai os deslocamentos dos pais e as margens do elemento
		Retorna {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
		};
	},

	// Este método retornará documentElement nos seguintes casos:
	// 1) Para o elemento dentro do iframe sem offsetParent, este método retornará
	// documentElement da janela pai
	// 2) Para o elemento oculto ou destacado
	// 3) Para corpo ou elemento html, ou seja, no caso do nó html - ele retornará a si mesmo
	//
	// mas essas exceções nunca foram apresentadas como casos de uso da vida real
	// e podem ser considerados como resultados mais preferíveis.
	//
	// Essa lógica, no entanto, não é garantida e pode mudar a qualquer momento no futuro
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		});
	}
});

// Cria os métodos scrollLeft e scrollTop
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[método] = function(val){
		return access( this, function( elem, method, val ) {

			// Aglutina documentos e janelas
			var vitória;
			if ( isWindow( elem ) ) {
				vitória = ele;
			} else if ( elem.nodeType === 9 ) {
				vitória = elem.defaultView;
			}

			if (val === indefinido) {
				retorno vitória? win[prop]: elem[método];
			}

			se (ganhar) {
				win.scrollTo(
					!topo ? val : win.pageXOffset,
					topo ? val: win.pageYOffset
				);

			} senão {
				elem[ metodo ] = val;
			}
		}, método, valor, argumentos.comprimento);
	};
});

// Suporte: Safari <=7 - 9.1, Chrome <=37 - 49
// Adicione o cssHooks superior/esquerdo usando jQuery.fn.position
// Bug do Webkit: https://bugs.webkit.org/show_bug.cgi?id=29084
// Bug de piscar: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle retorna porcentagem quando especificado para top/left/bottom/right;
// ao invés de fazer o módulo css depender do módulo offset, apenas verifique aqui
jQuery.each( [ "topo", "esquerda" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function(elem, computado) {
			se (computado) {
				computado = curCSS( elem, prop );

				// Se curCSS retornar porcentagem, fallback para offset
				return rnumnonpx.test(computado) ?
					jQuery(elem).position()[prop] + "px":
					computado;
			}
		}
	);
});


// Cria os métodos innerHeight, innerWidth, height, width, outerHeight e outerWidth
jQuery.each( { Altura: "altura", Largura: "largura" }, function(nome, tipo) {
	jQuery.each({
		preenchimento: "interior" + nome,
		tipo de conteúdo,
		"": "exterior" + nome
	}, function( defaultExtra, funcName ) {

		// Margem é apenas para outerHeight, outerWidth
		jQuery.fn[ funcName ] = function(margem, valor) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || (margem === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h incluindo barras de rolagem (gh-1729)
					return nomeFunc.indexOf( "externo" ) === 0 ?
						elem[ "interno" + nome]:
						elem.document.documentElement[ "cliente" + nome ];
				}

				// Obtém a largura ou altura do documento
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Ou scroll[Width/Height] ou offset[Width/Height] ou cliente[Width/Height],
					// o que for maior
					return Math.max(
						elem.body[ "scroll" + nome ], doc[ "scroll" + nome ],
						elem.body[ "deslocamento" + nome ], doc[ "deslocamento" + nome ],
						doc["cliente" + nome]
					);
				}

				valor de retorno === indefinido?

					// Obtém largura ou altura no elemento, solicitando mas não forçando parseFloat
					jQuery.css(elem, type, extra):

					// Define a largura ou altura do elemento
					jQuery.style(elem, tipo, valor, extra);
			}, tipo, encadeável ? margem : indefinida, encadeável );
		};
	});
});


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxCompleto",
	"ajaxError",
	"ajaxSucesso",
	"ajaxEnviar"
], function( _i, tipo ) {
	jQuery.fn[ tipo ] = function( fn ) {
		return this.on( tipo, fn );
	};
});




jQuery.fn.extend({

	bind: function( tipos, dados, fn ) {
		return this.on(types, null, data, fn );
	},
	unbind: function( tipos, fn ) {
		return this.off( tipos, null, fn );
	},

	delegado: function( seletor, tipos, dados, fn ) {
		return this.on( tipos, seletor, dados, fn );
	},
	undelegate: function( seletor, tipos, fn ) {

		// ( namespace ) ou ( seletor, tipos [, fn] )
		return argumentos.comprimento === 1 ?
			this.off(seletor, "**"):
			this.off( tipos, seletor || "**", fn );
	},

	hover: function(fnOver, fnOut) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
});

jQuery.each(
	("blur focus focusin focusout resize scroll click dblclick" +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave" +
	"alterar selecionar enviar keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, nome ) {

		// Manipula a vinculação de eventos
		jQuery.fn[ nome ] = function(dados, fn) {
			return argumentos.comprimento > 0 ?
				this.on( nome, nulo, dados, fn ):
				this.trigger( nome );
		};
	}
);




// Suporte: apenas Android <=4.0
// Certifique-se de cortar BOM e NBSP
// Requer que a "execução de espaço em branco" comece a partir de um não espaço em branco
// para evitar o comportamento O(N^2) quando o mecanismo tentar corresponder "\s+$" em cada posição do espaço.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Vincula uma função a um contexto, opcionalmente aplicando parcialmente qualquer
// argumentos.
// jQuery.proxy está obsoleto para promover padrões (especificamente Function#bind)
// No entanto, não está programado para remoção tão cedo
jQuery.proxy = function( fn, context ) {
	var tmp, argumentos, proxy;

	if ( tipo de contexto === "string" ) {
		tmp = fn[contexto];
		contexto = fn;
		fn = tmp;
	}

	// Verificação rápida para determinar se o destino pode ser chamado, na especificação
	// isso lança um TypeError, mas retornaremos apenas undefined.
	if ( !isFunção( fn ) ) {
		retorno indefinido;
	}

	// Ligação simulada
	args = slice.call( argumentos, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Configura o guid do handler único para o mesmo do handler original, para que possa ser removido
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	procuração de retorno;
};

jQuery.holdReady = function(hold) {
	se (manter) {
		jQuery.readyWait++;
	} senão {
		jQuery.ready(true);
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function(obj) {

	// A partir do jQuery 3.0, isNumeric é limitado a
	// strings e números (primitivos ou objetos)
	// que pode ser forçado a números finitos (gh-2662)
	var tipo = jQuery.type( obj );
	return ( tipo === "número" || tipo === "string") &&

		// parseFloat NaNs com conversão numérica de falsos positivos ("")
		// ...mas interpreta mal as strings de números iniciais, particularmente literais hexadecimais ("0x...")
		// a subtração força infinitos a NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function(texto) {
	texto de retorno == null ?
		"":
		(texto + "").replace(rtrim, "$1");
};



// Registra como um módulo AMD nomeado, pois jQuery pode ser concatenado com outros
// arquivos que podem usar define, mas não por meio de um script de concatenação adequado que
// entende os módulos anônimos da AMD. Um AMD nomeado é o mais seguro e robusto
// maneira de registrar. O jquery em minúsculas é usado porque os nomes dos módulos AMD são
// derivado de nomes de arquivos, e jQuery normalmente é entregue em letras minúsculas
// nome do arquivo. Faça isso depois de criar o global para que, se um módulo AMD quiser
// para chamar noConflict para ocultar esta versão do jQuery, funcionará.

// Observe que para portabilidade máxima, bibliotecas que não são jQuery devem
// declaram-se como módulos anônimos e evitam definir um global se um
// O carregador AMD está presente. jQuery é um caso especial. Para mais informações, veja
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "função" && define.amd ) {
	define( "jquery", [], function() {
		retornar jQuery;
	});
}




var

	// Mapeia sobre jQuery em caso de substituição
	_jQuery = window.jQuery,

	// Mapeia o $ em caso de substituição
	_$ = janela.$;

jQuery.noConflict = function(profundidade) {
	if ( window.$ === jQuery ) {
		janela.$ = _$;
	}

	if ( profundo && window.jQuery === jQuery ) {
		janela.jQuery = _jQuery;
	}

	retornar jQuery;
};

// Expor identificadores jQuery e $, mesmo em AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// e CommonJS para emuladores de navegador (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	janela.jQuery = janela.$ = jQuery;
}




retornar jQuery;
});