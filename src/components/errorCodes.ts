export const errorCodes: {
	[key: string]: {
		english: string;
		portuguese: string;
		description: string;
	};
} = {
	'400': {
		english: 'Bad Request',
		portuguese: 'Pedido inválido',
		description:
			'O servidor não pôde ou não quis processar o pedido devido a algo que é entendido como um erro do cliente (por exemplo, sintaxe de pedido malformada, enquadramento de mensagem de pedido inválido ou um encaminhamento enganador).'
	},
	'401': {
		english: 'Unauthorized',
		portuguese: 'Não autorizado',
		description:
			'Embora a norma HTTP especifique “não autorizado”, semanticamente esta resposta significa “não autenticado”. Ou seja, o cliente tem de se autenticar para obter a resposta solicitada.'
	},
	'403': {
		english: 'Forbidden',
		portuguese: 'Proibido',
		description:
			'O cliente não tem direitos de acesso ao conteúdo, ou seja, o servidor se recusa a fornecer o recurso solicitado. Ao contrário do “401 Unauthorized”, a identidade do cliente é conhecida pelo servidor.\n\nPara serviços hospedados pelo CACiC, isso também pode significar que o acesso só é permitido a partir da unespNET. Conecte-se à VPN e tente novamente.\nSe você já está conecto à VPN, pode ser que o seu navegador esteja usando o IPv6 da sua operadora para acessar o site. Tente bloquear o IPv6 nas configurações do OpenVPN.'
	},
	'404': {
		english: 'Not Found',
		portuguese: 'Não encontrado',
		description:
			'O servidor não conseguiu encontrar o recurso solicitado. No navegador, isso significa que o URL não é reconhecido. Numa API, isso pode significar que o endpoint é válido, mas o recurso em si não existe. Os servidores também podem enviar esta resposta em vez de “403 Forbidden” para ocultar a existência de um recurso de um cliente não autorizado.\n\nPara serviços hospedados pelo CACiC, isso também pode significar que uma rota para recurso não existe no proxy reverso.'
	},
	'405': {
		english: 'Method Not Allowed',
		portuguese: 'Método não permitido',
		description:
			'O método de request é conhecido pelo servidor, mas não é suportado pelo recurso de destino. Por exemplo, uma API pode não permitir DELETE num recurso, ou o método TRACE inteiramente.'
	},
	'406': {
		english: 'Not Acceptable',
		portuguese: 'Não aceitável',
		description:
			'Esta resposta é enviada quando o servidor web, depois de efetuar a negociação de conteúdos orientada para o servidor, não encontra qualquer conteúdo que esteja em conformidade com os critérios fornecidos pelo user agent.'
	},
	'407': {
		english: 'Proxy Authentication Required',
		portuguese: 'Autenticação de proxy necessária',
		description: 'O cliente deve primeiro autenticar-se com o proxy.'
	},
	'408': {
		english: 'Request Timeout',
		portuguese: 'Esgotou o tempo limite do pedido',
		description:
			'Esta resposta é enviada numa ligação inativa por alguns servidores, mesmo sem qualquer pedido prévio do cliente, e significa que o servidor pretende encerrar a ligação não utilizada. Esta resposta pode ser utilizada nos casos em que navegadores utilizam mecanismos de pré-conexão HTTP para acelerar a navegação. Alguns servidores podem encerrar uma ligação sem enviar esta mensagem.'
	},
	'409': {
		english: 'Conflict',
		portuguese: 'Conflito',
		description:
			'Esta resposta é enviada quando um pedido conflitua com o estado atual do servidor.'
	},
	'410': {
		english: 'Gone',
		portuguese: 'Desaparecido',
		description:
			'Esta resposta é enviada quando o conteúdo solicitado foi permanentemente eliminado do servidor, sem endereço de reencaminhamento. Espera-se que os clientes removam as suas caches e ligações ao recurso. A especificação HTTP indica que este código de estado seja utilizado para “serviços promocionais de duração limitada”. APIs não devem indicar recursos que foram eliminados com este código de estado.'
	},
	'411': {
		english: 'Length Required',
		portuguese: 'Comprimento necessário',
		description:
			'O servidor rejeitou o pedido porque o campo de Content-Length do cabeçalho HTTP não foi definido e o servidor o requer.'
	},
	'412': {
		english: 'Precondition Failed',
		portuguese: 'Pré-condição falhou',
		description:
			'O servidor não cumpriu com a pré-condição do pedido. O cliente pode solicitar que o recurso seja atualizado e reenviar o pedido.'
	},
	'413': {
		english: 'Content Too Large',
		portuguese: 'Conteúdo muito grande',
		description:
			'O corpo do pedido é maior do que os limites definidos pelo servidor. O servidor pode encerrar a conexão ou devolver um campo de cabeçalho “Retry-After”.\n\nPara serviços hospedados pelo CACiC, isso também pode significar que conteúdo ultrapassa o limite permitido pelo Cloudflare (150 MB).'
	},
	'414': {
		english: 'URI Too Long',
		portuguese: 'URI muito longo',
		description:
			'O URI pedido pelo cliente é mais longo do que o servidor está disposto a interpretar.'
	},
	'421': {
		english: 'Misdirected Request',
		portuguese: 'Pedido mal direcionado',
		description:
			'O pedido foi direcionado a um servidor que não foi capaz de produzir uma resposta.\n\nPara serviços hospedados pelo CACiC, isso também pode significar que você não deve acessar o IP do servidor diretamente. Utilize o domínio correto.'
	},
	'429': {
		english: 'Too Many Requests',
		portuguese: 'Muitos pedidos',
		description:
			'O cliente enviou demasiados pedidos num determinado período de tempo. Introduza um intervalo maior entre os pedidos.'
	},
	'500': {
		english: 'Internal Server Error',
		portuguese: 'Erro interno do servidor',
		description:
			'O servidor deparou-se com uma situação que não sabe como resolver. Este erro é genérico, indicando que o servidor não consegue encontrar um código de estado 5XX mais adequado para a resposta.'
	},
	'501': {
		english: 'Not Implemented',
		portuguese: 'Não implementado',
		description:
			'O método de pedido não é suportado pelo servidor e não pode ser tratado. Os únicos métodos que os servidores são obrigados a suportar (e, por conseguinte, que não devem devolver este código) são GET e HEAD.'
	},
	'502': {
		english: 'Bad Gateway',
		portuguese: 'Gateway inválido',
		description:
			'Esta resposta de erro significa que o servidor, enquanto trabalhava como gateway para obter uma resposta necessária para tratar o pedido, obteve uma resposta inválida.'
	},
	'503': {
		english: 'Service Unavailable',
		portuguese: 'Serviço indisponível',
		description:
			'O servidor não está pronto para lidar com o pedido. Causas comuns são um servidor em manutenção ou sobrecarregado.'
	},
	'504': {
		english: 'Gateway Timeout',
		portuguese: 'Esgotou o tempo limite do gateway',
		description:
			'O servidor, enquanto trabalhava como gateway para obter uma resposta necessária para tratar o pedido, não obteve uma resposta a tempo.\n\nPara serviços hospedados pelo CACiC, isso também pode significar que o proxy reverso está mal configurado ou o serviço está fora do ar.'
	},
	'511': {
		english: 'Network Authentication Required',
		portuguese: 'Autenticação de rede necessária',
		description: 'O cliente precisa autenticar-se para obter acesso à rede.'
	}
};
