---
title: "O início de uma comunidade"
author: "Thiago Cardoso"
date: 2019-05-24T17:30:21.486Z
lastmod: 2020-09-30T02:31:21-03:00

subtitle: "O que realizamos e aprendemos em um ano de encontros sobre arquitetura de software no CESAR"
summary: "Um ano de encontros sobre arquitetura de software"

image: "/posts/o-inicio-de-uma-comunidade/images/1.jpeg"
images:
 - "/posts/o-inicio-de-uma-comunidade/images/1.jpeg"
 - "/posts/o-inicio-de-uma-comunidade/images/2.jpeg"
 - "/posts/o-inicio-de-uma-comunidade/images/3.png"
 - "/posts/o-inicio-de-uma-comunidade/images/4.jpg"
 - "/posts/o-inicio-de-uma-comunidade/images/5.png"


aliases:
    - "/o-inicio-de-uma-comunidade"

---

> Este artigo foi originalmente publicado no [Medium](https://medium.com/cesar-update/o-inicio-de-uma-comunidade-e4214f82e0c2)


![#PraCegoVer parte de pintura feita por Georgenes Claudino na parede de um dos auditórios do CESAR com os dizeres &"identificar, potencializar, concretizar"](/posts/o-inicio-de-uma-comunidade/images/1.jpeg#layoutFillWidth "#PraCegoVer parte de pintura feita por [Georgenes Claudino](https://medium.com/u/e6cb81c50aa5) na parede de um dos auditórios do CESAR com os dizeres \"identificar, potencializar, concretizar\"")

_Este texto foi escrito em conjunto com_ [_Rodrigo Perazzo_](https://medium.com/u/167d7b5cc28a)_, revisado por_ [_Ricardo Cardoso de Almeida_](https://medium.com/u/aa916546bef8) _e é um resultado da colaboração de muitos outros que estiveram compartilhando e aprendendo junto conosco._

Aqui no [CESAR](https://www.cesar.org.br) — por sermos um instituto de inovação — rodamos projetos com características muito distintas, que podem variar em tempo de execução (2 meses a anos), objetivos (provas de conceito, projetos internos, produtos), escala (50 a milhões de usuários) ou plataformas (web, cloud, mobile, embarcado, IoT, etc). Essa diferença de necessidades forma bases de aprendizado igualmente distintas, a ponto de parecer que as equipes não falam a mesma língua e portanto surgem dúvidas sobre quais decisões técnicas, tais como linguagem, infraestrutura e arquitetura, se adequam ao caso da equipe ou mesmo se o que está sendo proposto [pela(s) comunidade(s)](https://medium.com/cesar-update/comunidades-de-software-são-artificiais-9c510d6633f3) não está distante da realidade. Com intuito de criar um vocabulário em comum, decidimos nos reunir para compartilhar nossos problemas e soluções em arquitetura de software.

Miramos em _fazer encontros em que os participantes trouxessem problemas ou soluções pelos quais estavam passando e que ao fim tivéssemos um &#34;cheat sheet&#34; que pudesse ser usado na próxima vez que aquele problema surgisse_, imaginando que se fôssemos _objetivos_ em lidar com questões _relevantes_ aos participantes criaríamos um espaço _confiável_ de resolução de problemas, sempre atentando para que fosse também um espaço _seguro_ para _aprendizagem_ e _compartilhamento_ de forma que ninguém se sentisse intimidado ao comparecer. No final de março deste ano completamos um ano de encontros e o que segue conta o que realizamos e aprendemos.

## Os encontros

Os temas e a sequência dos encontros foram sendo definidos à medida que aconteciam, sempre reavaliando o interesse do grupo. Em retrospecto, podemos analisá-los em quatro momentos.

### Começando Clean

Havia pessoas em projetos distintos do CESAR estudando [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) sem saber uma das outras e, ao descobrir, perceberam que não fazia sentido estarem isoladas. Esse foi um dos gatilhos para começar este grupo e o conhecimento adquirido nesses estudos foi naturalmente o tema dos primeiros encontros. Foram três, nos quais se abordaram uma visão geral deste estilo de arquitetura e como ele foi aplicado ao [experimento](https://github.com/cesarbr/knot-kegerator-android) feito para a [plataforma KNoT](https://www.knot.cesar.org.br). O resultado foi um [esboço de processo](https://drive.google.com/file/d/12Gs910U7yIDqvD5bCidCk5MhnzCsT6eY/view?usp=sharing) para escrever uma nova _feature_ usando Clean Architecture em uma aplicação Android.

![#PraCegoVer diagrama que faz parte de um esboço de processo para escrever uma nova feature usando Clean Architecture](/posts/o-inicio-de-uma-comunidade/images/2.jpeg#layoutTextWidth "#PraCegoVer diagrama que faz parte de um [esboço de processo](https://drive.google.com/file/d/12Gs910U7yIDqvD5bCidCk5MhnzCsT6eY/view?usp=sharing) para escrever uma nova _feature_ usando Clean Architecture")

Se por um lado conseguimos gerar um resultado prático desses encontros — como desejado — , por outro o foco em um único tema deu a impressão de que seria um grupo de estudos específico sobre Clean Architecture. Era hora de mudar.

### A sala de guerra

Ainda no mesmo formato dos três primeiros encontros, similar a uma palestra, trouxemos três temas distintos que vieram de leituras ou dúvidas que surgiram naquelas semanas. No primeiro abordamos _feature toggles_, tendo [este artigo](https://martinfowler.com/articles/feature-toggles.html) como guia e um _case_ de um dos participantes. No segundo encontro, falamos sobre [como escrever código testável](https://www.slideshare.net/tfcardoso/writing-testable-code-146475075) e como isso se relaciona com arquitetura. Por fim, chegamos à acalorada discussão sobre o que seria responsabilidade da _View_ que existe nos diversos padrões arquiteturais, que resultou em batizarmos a sala dos encontros de **#arq War Room**.

![#PraCegoVer porta da sala Lula Cardoso Ayres com um cartaz colado identificando que das 13:30 às 14:30 esta é a #arq War Room](/posts/o-inicio-de-uma-comunidade/images/3.png#layoutTextWidth "#PraCegoVer porta da sala Lula Cardoso Ayres com um cartaz colado identificando que das 13:30 às 14:30 esta é a #arq War Room")

Nestes encontros não geramos documentos, como para os primeiros, já nos fazendo perceber o quão difícil é ser objetivo na forma desejada inicialmente, mas não significa que os encontros se perderam. O conteúdo apresentado nos dois primeiros se aproxima de um _cheat sheet_, sobretudo o sobre como escrever código testável, e a discussão sobre a _View_ se tornou o primeiro exemplo de conhecimento compartilhado no grupo. Pergunte a algum integrante qual é a responsabilidade da _View_ e provavelmente vocês entrarão numa longa discussão que era melhor não ter iniciado. 😅

### As crônicas de arquitetura de software

Por ser ainda muito jovem, com cerca de 4 meses, o grupo dependia bastante do movimento de um subconjunto dos integrantes para que os encontros acontecessem e nesse momento os problemas que essas pessoas conseguiam trazer começavam a se esgotar. Para manter a frequência do grupo, resolvemos adotar o caminho sugerido nos primeiros encontros de estudar algum material existente— um livro, um conjunto de artigos ou aulas, etc — ao longo de vários encontros. Encontramos a série de posts intitulada [The Software Architecture Chronicles](https://herbertograca.com/2017/07/03/the-software-architecture-chronicles/) que se mostrou a escolha perfeita para o momento: conteúdo bem organizado, acessível para iniciantes e em posts em tamanho suficiente para que fossem lidos em um encontro.

![#PraCegoVer diagrama do MVPVM. De MVC and its alternatives](/posts/o-inicio-de-uma-comunidade/images/4.jpg#layoutOutsetLeft "#PraCegoVer diagrama do MVPVM. De [MVC and its alternatives](https://herbertograca.com/2017/08/17/mvc-and-its-variants/)")

Passamos pelos tópicos enumerados de 1 a 7, onde são abordados:

*   a evolução das linguagens de programação;
*   as diferenças entre estilo arquitetural, padrão arquitetural e padrão de projeto;
*   arquiteturas monolítica e em camadas;
*   MVC e suas alternativas — MVP, MVVM, MVPVM, etc.

Num primeiro momento lemos e discutimos todos os textos e em seguida fizemos uma série de encontros onde todas a variações de MVC vistas foram implementadas, disponível [aqui](https://github.com/CESARBR/arquitetura).

Tivemos _feedbacks_ positivos sobre estes encontros, sobretudo sobre os _hands-on_, porém como focamos por um bom tempo em uma parte do conteúdo sobre arquitetura de software — arquitetura de aplicações mobile/desktop — , outros integrantes eventuais que estavam mais interessados nos problemas que surgiam em _cloud computing_ ficaram de fora. Mudamos a estratégia novamente.

### Cloud e o início dos cases e pedidos de ajuda

Neste último momento dos encontros, que vai do final do ano passado até o aniversário do grupo no final de março deste ano, nos voltamos para _cloud_ e microserviços. A idéia foi fazer uma série de encontros de estudos, similar ao que estava acontecendo, porém com o conteúdo gerado por um dos integrantes. Isso se mostrou inviável, mas como tinhamos explorado pouco os problemas de _cloud computing_, não foi difícil trazer outros problemas e leituras.

Fizemos um encontro com uma introdução a microserviços, depois [como extrai-los a partir de um monólito](https://martinfowler.com/articles/extract-data-rich-service.html) e por fim vimos [como fazer _deploy_ na AWS](https://medium.com/@fidelissauro/docker-swarm-02-quickstart-do-seu-cluster-de-ec2-na-amazon-aws-com-docker-1394d365cb04) — método que foi usado em um [experimento carnavalesco](https://www.kdobloco.com.br) do KNoT/CESAR. Entre esses encontros, tivemos dois que se conectam com a ideia inicial do grupo: buscar soluções para problemas que os integrantes estão enfrentando. O primeiro foi um _post-mortem_ de um projeto do CESAR, em que foram apresentadas as soluções arquiteturais tomadas e o segundo encontro foi a primeira sessão de **pedido de ajuda**, em que alguém traz um problema para obter _insights_ do grupo.

Naquele momento, a apresentação de _cases_ e pedidos de ajuda pareciam eventos isolados e pensávamos que levaria meses para aparecer outro, no entanto, já adiantando as cenas dos próximos capítulos, o que aconteceu foi o contrário: do aniversário no final de março até o momento em que escrevemos esse artigo, **todos os encontros foram pedidos de ajuda**. Num próximo artigo podemos compartilhar o que estamos aprendendo com esses encontros, por enquanto vamos ver o que aprendemos com o que já foi realizado.

## A retrospectiva

Em um ano foram 23 encontros, nos quais abordamos diversos temas — TDD, _refactoring_, microserviços, MVC/MVP/MVVM, _feature toggle_ e __ Clean Architecture — em diferentes formatos — estudos coletivos, _hands-on_, palestras, pedidos de ajuda. Até então, o temas estavam sendo definidos baseado no nosso _feeling_ de uma parte dos integrantes sobre que estava funcionando ou não, mas será que estava sendo relevante para a maioria? O encontro que celebrou o aniversário do grupo foi o momento escolhido para compartilhar as impressões de todos sobre o que já tínhamos feito.

![#PraCegoVer pessoas ao redor de mesa organizando posts-its que contém os feedbacks da retrospectiva dos 3Ls: Liked, Learned, Lacked](/posts/o-inicio-de-uma-comunidade/images/5.png#layoutOutsetLeft "#PraCegoVer pessoas ao redor de mesa organizando posts-its que contém os feedbacks da retrospectiva dos 3Ls: Liked, Learned, Lacked")

Utilizamos a retrospectiva dos [3Ls: Liked, Learned, Lacked](http://www.funretrospectives.com/the-3-ls-liked-learned-lacked/), simples o suficiente para rodar em um curto espaço de tempo e, além do mínimo que se espera de um _feedback_ — _o que foi bem e o que pode melhorar — ,_ **explicita o que se _aprendeu_**. Segue o que foi levantado para cada um dos _Ls_ e na próxima seção sintetizamos em aprendizados.

### Liked

Podemos separar os _feedbacks_ sobre o que se gostou em quatro categorias: formatos, temas, questões de organização e comunidade. Dos formatos se sobressaíram dois:

*   o _hands-on_ —disparado o mais citado;
*   a apresentação de cases.

Nos temas apareceram:

*   SOLID;
*   as crônicas de arquitetura de software;
*   como extrair microserviços de um monólito.

Das questões de organização, os integrantes gostaram:

*   do horário ;
*   de ter transmissão;
*   de ter diferentes formatos;
*   do trabalho de manutenção do grupo.

Sobre o que agrupamos sob o nome comunidade foi colocado:

*   a interação com pessoas de outros projetos;
*   a abertura a diferentes temas/formatos/apresentadores;
*   a criação de uma comunidade;
*   a oportunidade de apresentar;
*   as discussões.

### Learned

Sobre o que foi aprendido, tivemos muitos _feedbacks_ sobre temas e outros poucos sobre aprendizados gerais. Os temas foram:

*   os mais citados foram os padrões vistos nas crônicas de arquitetura de software — MVC, MVP, MVVM, etc;
*   Clean Architecture;
*   Docker Swarm.

Sobre aprendizados gerais tivemos:

*   o entendimento de que problemas mais complexos dificilmente conseguirão ser tratados em um único encontro;
*   a percepção de que é possível rodar iniciativas _nas trincheiras_/_bottom-up_, isto é, sem que seja algo organizado pela empresa;
*   perceber que é possível criar conteúdo para apresentar mais rapidamente — tentamos ao fomentar a cultura de que não precisamos de material muito redondo para o encontro, que trazer uma dúvida e conversar a respeito é o objetivo.

### Lacked

Dividimos os _feedbacks_ sobre o que faltou em três grandes grupos: o que faltou gerar a partir dos encontros, o que faltou trazer para os encontros e o que se relaciona com o ecossistema. Do primeiro grupo, faltou:

*   organizar o que já foi produzido — algumas coisas estão em um _drive_, outras em um caderno compartilhado do Evernote, outras nas máquinas de integrantes, etc;
*   registrar a sessão: gravações, fotos, resumos, etc — fizemos em alguns eventos, mas não temos o hábito;
*   gerar conteúdo a partir dos registros: artigos, relatórios, infográficos, guias, códigos de template;
*   organizar o grupo para decidir o que/como externalizar o que for gerado;
*   gerar _outputs_ para o CESAR: ferramentas, _podcast_, cursos no CESAR School, etc.

Do segundo grupo, faltou:

*   ter mais _cases_ e exemplos do dia-a-dia;
*   se envolver em discussões dos projetos do CESAR;
*   se aprofundar mais nos tópicos abordados;
*   utilizar _problem based learning_;
*   ter _cases_ e exemplos de código com tecnologias diferentes — demos muitos exemplos com NodeJS e Android.

Sobre o que se relaciona com o ecossistema, faltou:

*   mais pessoas apresentando ou guiando as sessões;
*   pessoas de outras áreas ou do CESAR School;
*   abrir para outras empresas.

## O que aprendemos

No início imaginávamos que se fôssemos _objetivos_ em lidar com questões _relevantes_ aos participantes criaríamos um espaço _confiável_ de resolução de problemas, sempre atentando para que fosse também um espaço _seguro_ para _aprendizagem_ e _compartilhamento_, de forma que ninguém se sentisse intimidado ao comparecer. Agora, com esses _feedbacks_, temos alguns indícios de que essa visão faz sentido, como exemplo:

*   _hands-on_ (quando conseguimos ser _objetivos_) e apresentação de _cases_ (quando lidamos com problemas _reais_ e _relevantes_) foram os encontros mais lembrados e este último tipo de encontro foi apontado como algo que precisa acontecer mais;
*   o conteúdo mais citado como aprendido foi o abordado nos _hands-on_, o que entendemos como indício de que a gente aprende mais quando sintetizamos o que foi discutido;
*   as discussões, a abertura para novos temas/formatos e a possibilidade de apresentar foram apontadas como coisas que os integrantes gostaram, o que entendemos como indício de que o grupo pode ser um espaço _confiável_ e _seguro_ para se levar um problema e ter uma discussão.

Há outros dois pontos de aprendizado que não estão diretamente ligados à visão inicial:

*   transformar a discussão em um artefato pode ser útil, mas depende do artefato: enquanto alguns apontaram que os _hands-on_ foram importantes, outros demonstraram que gostariam de se aprofundar nas discussões e provavelmente gerar artefatos que estão um nível de abstração mais alto do que código;
*   os encontros podem promover a integração entre diferentes times da empresa: algumas pessoas levantaram que gostaram de ter contato com outras equipes neste espaço.

## Os próximos passos

Analisamos os pontos levantados em _Lacked_ e enxergamos que se resolvermos os problemas que nos impedem de organizar o conteúdo que já produzimos para os encontros — ter registro das sessões e ter esse conteúdo em lugar de fácil acesso — , ficará mais fácil de resolver outros problemas apontados, tais como envolver mais pessoas ou gerar conteúdo mais estruturado. Nossas primeiras ações tem sido em fazer ou definir um processo para:

*   organizar e centralizar o conteúdo já produzido;
*   melhorar o registro das sessões minimanente com gravações, fotos e um resumo do encontro;
*   organizar o grupo para tomadas de decisão.

Como dito anteriormente, por acaso ou por termos criado o espaço propício, estamos recebendo mais _pedidos de ajuda_ em projetos iniciados ou por iniciar no CESAR. Isto nos reconecta com a visão inicial, mas já se vislubram novas possibilidades: poderia esta comunidade ser um ponto de apoio provendo um serviço de análise rápida de arquitetura para projetos que iniciam ou até em momento de negociação para já adiantar possíveis problemas? Por ora, estamos testando dinâmicas para fazer com que esse tipo de encontro faça sentido para quem traz o problema. Vamos ver que resultados obtemos, como isso se alinha com os desejos desta comunidade e quem sabe não mudamos de estratégia novamente antes de uma próxima restrospectiva.
