--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-09-18 20:26:35

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 223 (class 1259 OID 41100)
-- Name: Carro; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Carro" (
    id integer NOT NULL,
    placa text,
    modelo text,
    marca text,
    renavam text,
    cor text,
    "motoristaId" integer NOT NULL
);


ALTER TABLE public."Carro" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 41099)
-- Name: Carro_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Carro_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Carro_id_seq" OWNER TO postgres;

--
-- TOC entry 3406 (class 0 OID 0)
-- Dependencies: 222
-- Name: Carro_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Carro_id_seq" OWNED BY public."Carro".id;


--
-- TOC entry 221 (class 1259 OID 41090)
-- Name: Convite; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Convite" (
    id integer NOT NULL,
    create_date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    email text,
    ativo boolean NOT NULL,
    "motoristaId" integer NOT NULL
);


ALTER TABLE public."Convite" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 41089)
-- Name: Convite_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Convite_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Convite_id_seq" OWNER TO postgres;

--
-- TOC entry 3407 (class 0 OID 0)
-- Dependencies: 220
-- Name: Convite_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Convite_id_seq" OWNED BY public."Convite".id;


--
-- TOC entry 219 (class 1259 OID 41080)
-- Name: Motorista; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Motorista" (
    id integer NOT NULL,
    create_date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "CNH" text,
    ant_criminal text,
    avaliacao text,
    validade_cnh timestamp(3) without time zone NOT NULL,
    detalhes_corridas text
);


ALTER TABLE public."Motorista" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 41079)
-- Name: Motorista_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Motorista_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Motorista_id_seq" OWNER TO postgres;

--
-- TOC entry 3408 (class 0 OID 0)
-- Dependencies: 218
-- Name: Motorista_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Motorista_id_seq" OWNED BY public."Motorista".id;


--
-- TOC entry 217 (class 1259 OID 41072)
-- Name: Pedido; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pedido" (
    id integer NOT NULL,
    create_date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    preco double precision NOT NULL,
    final timestamp(3) without time zone NOT NULL,
    inicio timestamp(3) without time zone NOT NULL,
    cancelpass boolean NOT NULL,
    cancelmoto boolean NOT NULL,
    destino double precision NOT NULL,
    localizacao_atual double precision NOT NULL,
    "motoristaId" integer NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."Pedido" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 41071)
-- Name: Pedido_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Pedido_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Pedido_id_seq" OWNER TO postgres;

--
-- TOC entry 3409 (class 0 OID 0)
-- Dependencies: 216
-- Name: Pedido_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pedido_id_seq" OWNED BY public."Pedido".id;


--
-- TOC entry 213 (class 1259 OID 41053)
-- Name: Pet; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pet" (
    id integer NOT NULL,
    nome text,
    peso double precision NOT NULL,
    comportamento text,
    foto text,
    sexo text,
    raca text,
    especia text,
    "userId" integer NOT NULL
);


ALTER TABLE public."Pet" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 41052)
-- Name: Pet_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Pet_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Pet_id_seq" OWNER TO postgres;

--
-- TOC entry 3410 (class 0 OID 0)
-- Dependencies: 212
-- Name: Pet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pet_id_seq" OWNED BY public."Pet".id;


--
-- TOC entry 211 (class 1259 OID 40984)
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    email text NOT NULL,
    nome text,
    sobrenome text,
    cpf text NOT NULL,
    rg text NOT NULL,
    valido boolean NOT NULL,
    foto text,
    celular text,
    password text
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 40983)
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO postgres;

--
-- TOC entry 3411 (class 0 OID 0)
-- Dependencies: 210
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- TOC entry 215 (class 1259 OID 41062)
-- Name: Viagem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Viagem" (
    id integer NOT NULL,
    chat text,
    update_date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    pontuacao text,
    "pedidoId" integer NOT NULL
);


ALTER TABLE public."Viagem" OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 41061)
-- Name: Viagem_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Viagem_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Viagem_id_seq" OWNER TO postgres;

--
-- TOC entry 3412 (class 0 OID 0)
-- Dependencies: 214
-- Name: Viagem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Viagem_id_seq" OWNED BY public."Viagem".id;


--
-- TOC entry 209 (class 1259 OID 40972)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- TOC entry 3211 (class 2604 OID 41103)
-- Name: Carro id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Carro" ALTER COLUMN id SET DEFAULT nextval('public."Carro_id_seq"'::regclass);


--
-- TOC entry 3209 (class 2604 OID 41093)
-- Name: Convite id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Convite" ALTER COLUMN id SET DEFAULT nextval('public."Convite_id_seq"'::regclass);


--
-- TOC entry 3207 (class 2604 OID 41083)
-- Name: Motorista id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Motorista" ALTER COLUMN id SET DEFAULT nextval('public."Motorista_id_seq"'::regclass);


--
-- TOC entry 3205 (class 2604 OID 41075)
-- Name: Pedido id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido" ALTER COLUMN id SET DEFAULT nextval('public."Pedido_id_seq"'::regclass);


--
-- TOC entry 3202 (class 2604 OID 41056)
-- Name: Pet id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pet" ALTER COLUMN id SET DEFAULT nextval('public."Pet_id_seq"'::regclass);


--
-- TOC entry 3200 (class 2604 OID 40987)
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- TOC entry 3203 (class 2604 OID 41065)
-- Name: Viagem id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Viagem" ALTER COLUMN id SET DEFAULT nextval('public."Viagem_id_seq"'::regclass);


--
-- TOC entry 3400 (class 0 OID 41100)
-- Dependencies: 223
-- Data for Name: Carro; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Carro" (id, placa, modelo, marca, renavam, cor, "motoristaId") FROM stdin;
\.


--
-- TOC entry 3398 (class 0 OID 41090)
-- Dependencies: 221
-- Data for Name: Convite; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Convite" (id, create_date, email, ativo, "motoristaId") FROM stdin;
\.


--
-- TOC entry 3396 (class 0 OID 41080)
-- Dependencies: 219
-- Data for Name: Motorista; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Motorista" (id, create_date, "CNH", ant_criminal, avaliacao, validade_cnh, detalhes_corridas) FROM stdin;
\.


--
-- TOC entry 3394 (class 0 OID 41072)
-- Dependencies: 217
-- Data for Name: Pedido; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pedido" (id, create_date, preco, final, inicio, cancelpass, cancelmoto, destino, localizacao_atual, "motoristaId", "userId") FROM stdin;
\.


--
-- TOC entry 3390 (class 0 OID 41053)
-- Dependencies: 213
-- Data for Name: Pet; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pet" (id, nome, peso, comportamento, foto, sexo, raca, especia, "userId") FROM stdin;
\.


--
-- TOC entry 3388 (class 0 OID 40984)
-- Dependencies: 211
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, "createdAt", email, nome, sobrenome, cpf, rg, valido, foto, celular, password) FROM stdin;
1	2022-09-15 14:50:29.472	ronaldo@gmail.com	jose	ronaldo	22851063863	377053442	t	teste	11989533474	12345678
\.


--
-- TOC entry 3392 (class 0 OID 41062)
-- Dependencies: 215
-- Data for Name: Viagem; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Viagem" (id, chat, update_date, pontuacao, "pedidoId") FROM stdin;
\.


--
-- TOC entry 3386 (class 0 OID 40972)
-- Dependencies: 209
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
a055ab8b-c87d-479c-b7ee-64867449ae79	d56716e36fdf5bce647dfb1b5b71867fb088746c8a20df275404cafd613569b8	2022-08-26 22:42:13.304864-03	20220827014213_tabela_usuario	\N	\N	2022-08-26 22:42:13.055153-03	1
59ead9dd-faa4-4f90-a45b-849ea78b9efe	d2a74e7e43196425b2f4b251daf7565b831805f655483d87e3d6e4fccf5574d2	2022-08-27 10:08:22.548707-03	20220827130821_tabelas_sem_relacionamentos	\N	\N	2022-08-27 10:08:21.589744-03	1
778511f3-222b-4aa9-b872-3afd988bb32d	a1ac243da0fdecc085d3d7253139596e11078ff1332ed34fa6ebaa5ed6a1fb14	2022-09-12 11:50:32.07956-03	20220912145031_tabela_relacionadas	\N	\N	2022-09-12 11:50:31.875785-03	1
\.


--
-- TOC entry 3413 (class 0 OID 0)
-- Dependencies: 222
-- Name: Carro_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Carro_id_seq"', 1, false);


--
-- TOC entry 3414 (class 0 OID 0)
-- Dependencies: 220
-- Name: Convite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Convite_id_seq"', 1, false);


--
-- TOC entry 3415 (class 0 OID 0)
-- Dependencies: 218
-- Name: Motorista_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Motorista_id_seq"', 1, false);


--
-- TOC entry 3416 (class 0 OID 0)
-- Dependencies: 216
-- Name: Pedido_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pedido_id_seq"', 1, false);


--
-- TOC entry 3417 (class 0 OID 0)
-- Dependencies: 212
-- Name: Pet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pet_id_seq"', 1, false);


--
-- TOC entry 3418 (class 0 OID 0)
-- Dependencies: 210
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, true);


--
-- TOC entry 3419 (class 0 OID 0)
-- Dependencies: 214
-- Name: Viagem_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Viagem_id_seq"', 1, false);


--
-- TOC entry 3238 (class 2606 OID 41107)
-- Name: Carro Carro_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Carro"
    ADD CONSTRAINT "Carro_pkey" PRIMARY KEY (id);


--
-- TOC entry 3234 (class 2606 OID 41098)
-- Name: Convite Convite_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Convite"
    ADD CONSTRAINT "Convite_pkey" PRIMARY KEY (id);


--
-- TOC entry 3230 (class 2606 OID 41088)
-- Name: Motorista Motorista_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Motorista"
    ADD CONSTRAINT "Motorista_pkey" PRIMARY KEY (id);


--
-- TOC entry 3227 (class 2606 OID 41078)
-- Name: Pedido Pedido_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido"
    ADD CONSTRAINT "Pedido_pkey" PRIMARY KEY (id);


--
-- TOC entry 3220 (class 2606 OID 41060)
-- Name: Pet Pet_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pet"
    ADD CONSTRAINT "Pet_pkey" PRIMARY KEY (id);


--
-- TOC entry 3217 (class 2606 OID 40992)
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- TOC entry 3224 (class 2606 OID 41070)
-- Name: Viagem Viagem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Viagem"
    ADD CONSTRAINT "Viagem_pkey" PRIMARY KEY (id);


--
-- TOC entry 3213 (class 2606 OID 40980)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3235 (class 1259 OID 41111)
-- Name: Carro_marca_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Carro_marca_key" ON public."Carro" USING btree (marca);


--
-- TOC entry 3236 (class 1259 OID 41413)
-- Name: Carro_motoristaId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Carro_motoristaId_key" ON public."Carro" USING btree ("motoristaId");


--
-- TOC entry 3239 (class 1259 OID 41110)
-- Name: Carro_placa_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Carro_placa_key" ON public."Carro" USING btree (placa);


--
-- TOC entry 3240 (class 1259 OID 41112)
-- Name: Carro_renavam_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Carro_renavam_key" ON public."Carro" USING btree (renavam);


--
-- TOC entry 3232 (class 1259 OID 41414)
-- Name: Convite_motoristaId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Convite_motoristaId_key" ON public."Convite" USING btree ("motoristaId");


--
-- TOC entry 3228 (class 1259 OID 41108)
-- Name: Motorista_CNH_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Motorista_CNH_key" ON public."Motorista" USING btree ("CNH");


--
-- TOC entry 3231 (class 1259 OID 41109)
-- Name: Motorista_validade_cnh_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Motorista_validade_cnh_key" ON public."Motorista" USING btree (validade_cnh);


--
-- TOC entry 3225 (class 1259 OID 41415)
-- Name: Pedido_motoristaId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Pedido_motoristaId_key" ON public."Pedido" USING btree ("motoristaId");


--
-- TOC entry 3221 (class 1259 OID 41416)
-- Name: Pet_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Pet_userId_key" ON public."Pet" USING btree ("userId");


--
-- TOC entry 3214 (class 1259 OID 40994)
-- Name: User_cpf_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_cpf_key" ON public."User" USING btree (cpf);


--
-- TOC entry 3215 (class 1259 OID 40993)
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- TOC entry 3218 (class 1259 OID 40995)
-- Name: User_rg_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_rg_key" ON public."User" USING btree (rg);


--
-- TOC entry 3222 (class 1259 OID 41417)
-- Name: Viagem_pedidoId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Viagem_pedidoId_key" ON public."Viagem" USING btree ("pedidoId");


--
-- TOC entry 3246 (class 2606 OID 41443)
-- Name: Carro Carro_motoristaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Carro"
    ADD CONSTRAINT "Carro_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES public."Motorista"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3245 (class 2606 OID 41438)
-- Name: Convite Convite_motoristaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Convite"
    ADD CONSTRAINT "Convite_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES public."Motorista"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3244 (class 2606 OID 41433)
-- Name: Pedido Pedido_motoristaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido"
    ADD CONSTRAINT "Pedido_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES public."Motorista"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3243 (class 2606 OID 41428)
-- Name: Pedido Pedido_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pedido"
    ADD CONSTRAINT "Pedido_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3241 (class 2606 OID 41418)
-- Name: Pet Pet_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pet"
    ADD CONSTRAINT "Pet_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3242 (class 2606 OID 41423)
-- Name: Viagem Viagem_pedidoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Viagem"
    ADD CONSTRAINT "Viagem_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES public."Pedido"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


-- Completed on 2022-09-18 20:26:35

--
-- PostgreSQL database dump complete
--

