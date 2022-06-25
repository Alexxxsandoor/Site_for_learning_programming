var course = [
	{
		id: 0,
		img: "imgCourse/1.png",
		title: "Розділ 1. Введення в предметну область.",
		info: "Тут ви познайомитесь з тим, що таке Бази Даних, для чого вони потрібні та як їх використовують.",
		themes: [
			{
				id: 0,
				title: "📑	Вступ",
				info: `Невеличкий опис`,
				downInfo: `Великий текст`,
				img: "imgCourse/sql.png",
				video: "",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 1. Бази даних",
				info: `Вступний ролик про початок використання баз даних, їх розвиток, типи, СУБД та інш.`,
				downInfo: `Що таке База Даних, як вона працює і для чого потрібна.<br/> 
				Які є типи Баз Даних.<br/>
				Що таке Реляційна База Даних, Система Управління Базами Даних.<br/> 
				Що таке SQL (структурована мова запитів) і для чого вона потрібна.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/NHduSOckNwM",
				code: ``
			},
			{
				id: 0,
				title: "❔	Питання для самоперевірки",
				type: "cards",
				info: `Шаблон с завданням для засвоєння вивченого матеріалу`,
				img: "imgCourse/sql.png",
				video: "",
				card: [
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
				]
			},
			{
				id: 0,
				title: "🎬	Тема 2. Для чого потрібні бази даних",
				info: `Що призвело до створення Баз Даних і яку технічну проблему вони покликані вирішувати`,
				downInfo: `типи даних;<br/>
				розмір даних;<br/>
				оновлення та збереження даних;<br/>
				безпека даних;<br/>
				проблема дублювання даних;`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/aJAWk6JIWMw",
				code: ``
			},
			{
				id: 0,
				title: "❔	Питання для самоперевірки",
				type: "cards",
				info: `Шаблон с завданням для засвоєння вивченого матеріалу`,
				img: "imgCourse/sql.png",
				video: "",
				card: [
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
				]
			},
			{
				id: 0,
				title: "🎬	Тема 3. Реляційна база даних",
				info: `Реляційна база даних на прикладі СУБД MySql`,
				downInfo: `Як виглядає і з чого складається типова реляційна база даних на прикладі MySql. Як працює СУБД. Як виглядає запит до БД`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/MlHC0CtjRhg",
				code: ``
			},
			{
				id: 0,
				title: "❔	Питання для самоперевірки",
				type: "cards",
				info: `Шаблон с завданням для засвоєння вивченого матеріалу`,
				img: "imgCourse/sql.png",
				video: "",
				card: [
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
				]
			},
			{
				id: 0,
				title: "🎬	Тема 4. Використання баз даних в різноманітних системах",
				info: `Як Бази Даних використовують в комп'ютерних системах`,
				downInfo: `Як бази даних використовуються в сучасних ІТ проектах. Чому адміністратори баз даних заробляють такі великі гроші. Як працює вебсайт, який використовує Базу Даних.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/o5tG7htbAWk",
				code: ``
			},
			{
				id: 0,
				title: "❔	Питання для самоперевірки",
				type: "cards",
				info: `Шаблон с завданням для засвоєння вивченого матеріалу`,
				img: "imgCourse/sql.png",
				video: "",
				card: [
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
				]
			},
			{
				id: 0,
				title: "🎬	Тема 5. Розташування даних на комп'ютері",
				info: `Де живуть Бази Даних на комп'ютері чи сервері`,
				downInfo: `Ліричний відступ - де "сидять" файли баз даних на комп'ютері. Чому не не можемо відкрити Базу Даних як файл Word чи Excel, просто двічі клацнувши на ньому, і де ці файли взагалі знайти.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/wEa5jjOerws",
				code: ``
			},
			{
				id: 0,
				type: "test",
				title: "📅	Підсумковий тест по першому розділу",
				info: `Обрати тільки одну або декілька правильних відповідей.<br/> 
				<br/>`,
				test: [
					{
						type: "one",
						question: "Який варіант правильний?",
						answers: [
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
						],
					},
					{
						type: "lot",
						question: "Виберіть усі правильні варіанти відповідей",
						answers: [
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "yes",
								answer: "правильна відповідь"
							},
						],
					},
					{
						type: "one",
						question: "Яка варіант правильний?",
						answers: [
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
						],
					},


				]
			},
		]
	},

	{
		id: 0,
		img: "imgCourse/Mysql.png",
		title: "Система управління базами даних MySQL.",
		info: "Інструкція по встановленню та налаштуванню MySql на комп'ютер. Покрокові інструкції підключення до MySql Server. 🐬",
		themes: [
			{
				id: 0,
				title: "🔧	Тема 6. Як встановити MySQL на Windows 10.",
				info: `Встановлення MySQL`,
				downInfo: `Покрокова інструкція як встановити і налаштувати MySql на Windows 7 або Windows 10. Також, інструкції як підключитись до MySql Server. З детальним поясненням кожного кроку.`,
				img: "imgCourse/Mysql.png",

				video: "https://www.youtube.com/embed/BD1PnBDhP0o",
				code: ``
			},
			{
				id: 0,
				title: "📑	Інструкція по встановленню",
				info: `Невеличкий опис`,
				downInfo: `Великий текст`,
				img: "imgCourse/Mysql.png",
				video: "",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 7. Програма MySQL Workbench.",
				info: `Повний детальний огляд можливостей програми MySQL Workbench.`,
				downInfo: `Огляд функцій і можливостей програми MySQL Workbench. Це найпопулярніша і одна з найкращих програм з графічним інтерфейсом для роботи з базами даних MySQL. В цьому відео - з чого складається вікно програми, як користуватись її основними функціями і також огляд додаткових, розширених можливостей.`,
				img: "imgCourse/Mysql.png",

				video: "https://www.youtube.com/embed/3zpLJmabr5I",
				code: ``
			},


		]
	},

	{
		id: 0,
		img: "imgCourse/2.png",
		title: "Розділ 2. Знайомство з базами даних.",
		info: "В цьому розділі піде мова про створення баз даних і таблиць, їх редагування, типи даних, зв'язки між таблицями та поняттям ключів в базах даних.",
		themes: [
			{
				id: 0,
				title: "🎬	Тема 8. Створення бази даних",
				info: `2 способи створити базу даних`,
				downInfo: `Детальна покрокова інструкція по створенню бази даних (демонстрація кількох різних способів) з поясненням усіх деталей і особливостей. Інструкція для програмістів і майбутніх адміністраторів`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/4uWINY_zA8c",
				code: ``
			},
			{
				id: 0,
				title: "❔	Питання для самоперевірки",
				type: "cards",
				info: `Шаблон с завданням для засвоєння вивченого матеріалу`,
				img: "imgCourse/sql.png",
				video: "",
				card: [
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
				]
			},
			{
				id: 0,
				title: "🎬	Тема 9. Створення таблиць",
				info: `Як створити таблицю у Базі Даних і що таке Первинний Ключ`,
				downInfo: `Детальне покрокове пояснення як створити таблицю у базі даних за допомогою SQL команди і з використанням графічних інструментів MySQL Workbench. Також детальне пояснення що таке Первинний Ключ і чому він дуже важливий у Реляційних Базах Даних.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/-Wj20A8IgCA",
				code: ``
			},
			{
				id: 0,
				title: "❔	Питання для самоперевірки",
				type: "cards",
				info: `Шаблон с завданням для засвоєння вивченого матеріалу`,
				img: "imgCourse/sql.png",
				video: "",
				card: [
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
				]
			},
			{
				id: 0,
				title: "🎬	Тема 10. Редагування таблиць у базах даних",
				info: `Як редагувати таблиці у БД SQL`,
				downInfo: `Як редагувати/модифікувати таблиці у базі даних MySQL. Як додати/видалити стовпець або атрибут, як змінити розмір стовпчика, як видалити таблицю і навіть базу даних.
				Усе, використовуючи SQL команди`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/X-3qbczI4xg",
				code: ``
			},
			{
				id: 0,
				title: "❔	Питання для самоперевірки",
				type: "cards",
				info: `Шаблон с завданням для засвоєння вивченого матеріалу`,
				img: "imgCourse/sql.png",
				video: "",
				card: [
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
				]
			},
			{
				id: 0,
				title: "🎬	Тема 11. Типи даних",
				info: `Типи даних у базах даних`,
				downInfo: `Які типи даних використовують сучасні бази даних і для чого вони потрібні..`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/lEiV0rO1tpY",
				code: ``
			},
			{
				id: 0,
				title: "❔	Питання для самоперевірки",
				type: "cards",
				info: `Шаблон с завданням для засвоєння вивченого матеріалу`,
				img: "imgCourse/sql.png",
				video: "",
				card: [
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
				]
			},
			{
				id: 0,
				title: "🎬	Тема 12. Первиннй і зовнішній ключ",
				info: `Бази даних для початківців - Первиннй Ключ і Зовнішній Ключ`,
				downInfo: `Що таке Зовнішній Ключ (ЗК), англ. Foreign Key  і який зв'язок між Зовнішнім Ключем і Первинним Ключем. 
				Зв'язок типу ЗК-ПК - це те, що робить реляційні бази даних "реляційними". Достовірність посилання - це ще один важливий принцип для РБД.
				Детальне пояснення для тих, хто хоче вивчити або зрозуміти як працюють реляційні бази даних.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/PMiI7rGhZQY",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 13. Зв'язки між таблицями",
				info: `Теорія Баз Даних - Взаємний зв'язок між таблицями`,
				downInfo: `Як у БД можна створити взаємний зв'язок типу PK-FK (Первинний Ключ - до - Зовнішнього Ключа) між двома таблицями, і чому корисно знати, як це зробити. Детальне пояснення з прикладом.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/4zEvYNpKAOw",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 14. Зв'язок типу ЗК-ПК",
				info: `MySql - Зв'язок типу ЗК-ПК між двома стовпцями в одній таблиці`,
				downInfo: `Як створити зв'язок типу "Зовнішній Ключ - Первинний Ключ" між двома стовпцями в одній і тій же таблиці. Типовий сценарій використання такого зв'язку.
				Також, як у програмі Workbench подивитись інформацію про всі зовнішні ключі для певної таблиці.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/k6O8vBFmDbc",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 15. Поняття композитного первинного ключа",
				info: `SQL - Композитний (складений) Первинний Ключ`,
				downInfo: `Що таке Композитний (складений) первинний ключ в реляційних базах даних (composite primary key). Для чого він використовується, і як його додати до таблиці у БД.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/mMMu3VW_qro",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 16. Поняття унікального ключа",
				info: `SQL - Композитний (складений) Первинний Ключ`,
				downInfo: `Що таке Унікальний Ключ (Unique Key), або ж Унікальний Індекс (Unique Index) в реляційних базах даних (на прикладі MySQL), і як він використовується в сучасних БД.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/6MtDS6v7Tnc",
				code: ``
			},
			{
				id: 0,
				type: "test",
				title: "📅	Підсумковий тест по першому розділу",
				info: `Обрати тільки одну або декілька правильних відповідей.<br/> 
				<br/>`,
				test: [
					{
						type: "one",
						question: "Який варіант правильний?",
						answers: [
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
						],
					},
					{
						type: "lot",
						question: "Виберіть усі правильні варіанти відповідей",
						answers: [
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "yes",
								answer: "правильна відповідь"
							},
						],
					},
					{
						type: "one",
						question: "Яка варіант правильний?",
						answers: [
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
						],
					},


				]
			},
		]
	},

	{
		id: 0,
		img: "imgCourse/3.png",
		title: "Розділ 3. Мова SQL, запити та команди.",
		info: "SQL команди для додавання, зчитування, редагування і видалення даних.",
		themes: [
			{
				id: 0,
				title: "🎬	Тема 17. Порівняння SQL-запитів SQL-команд",
				info: `SQL Запит vs. SQL Команда `,
				downInfo: `Чим SQL Запит (Query) відрізняється він SQL Команди (Command). І для чого існує умовний поділ SQL (на DDL, DML, DQL і DCL). Корисно знати усім адмінам і програмістам баз даних. .`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/4Eh_dwFURqU",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 18. SQL-команди для роботи з даними",
				info: `SQL команди для додавання, зчитування, редагування і видалення даних.`,
				downInfo: `Детальний огляд чотирьох основних команд/запитів в SQL для Додавання, Зчитування, Редагування і Видалення даних (Create, Read, Update, Delete - CRUD) - з поясненням і прикладами. Що кожна з цих команд робить і як працює на прикладі MySQL.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/omzaq6VxTg8",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 19. Команда INSERT",
				info: `SQL команда INSERT для додавання даних в таблицю.`,
				downInfo: `Команда INSERT використовується в усіх реляційних БД для вставлення нового запису в таблицю у БД. В цьому уроці - детальний огляд можливостей цієї команди і як вона працює.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/nvUo7Vqxkp4",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 20. Запит SELECT",
				info: `Запит SELECT в SQL🔍.`,
				downInfo: `Що таке запит (команда) SELECT в SQL. Як його написати і виконати для пошуку і отримання даних з таблиці у реляційні базі даних (напр. MySQL). З детальними поясненнями і цікавими прикладами.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/Kg4cSXsMHOM",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 21. Вираз WHERE",
				info: `Як шукати дані у БД використовуючи вираз WHERE в SQL (WHERE clause).`,
				downInfo: `Вираз WHERE ("WHERE clause") використовують в SQL у командах SELECT, UPDATE i DELETE для того, щоб вказати критерії пошуку (напр. знайти тільки людей, які народились в 2000му році або видалити всі записи, де вартість товару дорівнює нулю і т.д.).

				Вираз WHERE має купу цікавих можливостей і особливостей. Про все це - у цьому уроці.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/tEzJUFhHgVE",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 22. Поняття NULL",
				info: `NULL - що це таке в SQL і в програмуванні?`,
				downInfo: `В реляційних базах даних, в SQL і навіть у більшості сучасних мов програмування "NULL" - це дуже особливе ключове слово, яке вказує на "відсутність значення". Що це таке, як працює і для чого потрібне - в цьому відео.`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/WnI5Nbo1KCY",
				code: ``
			},
			{
				id: 0,
				title: "🎬	Тема 23. Команда DELETE",
				info: `SQL команда DELETE для видалення даних`,
				downInfo: `Що таке команда DELETE в SQL і як її використовувати (і не використовувати) для видалення даних з таблиці у базі даних (на прикладі MySQL).`,
				img: "imgCourse/sql.png",

				video: "https://www.youtube.com/embed/rYVrinUd16w",
				code: ``
			},
		]
	},

	{
		id: 1,
		img: "imgCourse/kisspng.png",
		title: "Демонстрація можливостей системи",
		info: "Реалізація шаблонів системи для максимально інформативної демонастрації роботи.",
		themes: [
			{
				id: 1,

				title: "Універсальний шаблон",
				info: `Основний шаблон для теоретичної викладки матеріалу`,
				downInfo: `В даному шаблоні наявні такі можливості:<br/><br/>
				- додавання відео за посиланням <br/>
				- додавання картинок будь якого формату, як для всього курсу, так і для кожної теми окремо<br/>
				- додавання фрагментів коду<br/>
				- вставляти текст(обмеження на кількість немає)<br/>
				- форматування тексту(для всієї системи)<br/><br/>
				
				Нижче наведені фрагменти коду для виведення картинки знизу.`,
				img: "imgCourse/kisspng.png",

				video: "https://www.youtube.com/embed/9gJ8phdcib8",
				code: `
	if (course[idCourse].themes[idTheme].img) {

		const imgDiv = document.createElement("img")

		imgDiv.className = "image-theme"

		imgDiv.setAttribute("src", course[idCourse].themes[idTheme].img)

		imgDiv.setAttribute("alt", "Картинка в темі")

		window.append(imgDiv)

		}`
			},
			{
				id: 0,
				type: "test",
				title: "Шаблон тестів",
				info: `Тести з можливістю обрати тільки одну або декілька відповідей.<br/> 
				<br/>`,
				test: [
					{
						type: "one",
						question: "Який варіант правильний?",
						answers: [
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
						],
					},
					{
						type: "lot",
						question: "Виберіть усі правильні варіанти відповідей",
						answers: [
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "yes",
								answer: "правильна відповідь"
							},
						],
					},
					{
						type: "one",
						question: "Яка варіант правильний?",
						answers: [
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
						],
					},


				]
			},
			{
				id: 0,
				type: "test",
				title: "Шаблон з можливістю вписати відповідь",
				info: ``,
				test: [
					{
						type: "write",
						question: "Який оператор в мові SQL здійснює вибірку з бази даних та має найскладнішу структуру серед усіх операторів мови SQL?",
						answers: [{
							id: "Впишіть вашу відповідь",
							answer: "SELECT"
						},
						]
					},
					{
						type: "write",
						question: "Що повинно стояти в пропущенних ділянках",
						code: `{
				SELECT population ? world
				? name = 'France'
}`,
						answers: [{
							id: "Впишіть вашу відповідь",
							answer: "FROM"
						},
						{
							id: "Впишіть вашу відповідь",
							answer: "WHERE"
						}
						]
					},
				]
			},
			{
				id: 0,
				type: "test",
				title: "Шаблон практичного завдання",
				info: `Демонстрація шаблону в якому присутня більшість можливих практичних завдань`,
				test: [
					{
						type: "one",
						question: "Який варіант правильний?",
						answers: [
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
						],
					},
					{
						type: "lot",
						question: "Виберіть усі правильні варіанти відповідей",
						code: ``,
						answers: [
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "yes",
								answer: "правильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
							{
								id: "no",
								answer: "неправильна відповідь"
							},
						],
					},
					{
						type: "write",
						question: "Впишіть правильну відповідь",
						code: `{
	x-let
		y-var
	z________Z__________-const
}`,
						answers: [{
							id: "X",
							answer: "var"
						},
						{
							id: "Y",
							answer: "2"
						}
						]
					},
				]
			},
			{
				id: 0,
				title: "Питання для самоперевірки",
				type: "cards",
				info: `Шаблон с завданням для засвоєння вивченого матеріалу`,
				img: "imgCourse/sql.png",
				video: "",
				card: [
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
					{
						question: "Питання",
						answer: "Відповідь",
					},
				]
			},

		]
	},

]

const courseOutput = (course) => {

	const container = document.querySelector(".container")

	const divContainerSearch = document.querySelector(".container__right-container")
	if (divContainerSearch) divContainerSearch.remove()

	const divContainer = document.createElement("div")
	divContainer.className = "container__right-container"



	container.append(divContainer)

	for (let i = 0; i < course.length; i++) {
		//	блок для темы курса
		const courseThemes = document.createElement("div")
		courseThemes.className = "right-container__bottom-themes"

		// круг прогресса
		const circle = document.createElement("div")
		circle.className = "circle-progress"

		const circleInCircle = document.createElement("img")
		circleInCircle.className = "circle-progress-center"
		circleInCircle.setAttribute("src", course[i].img)

		divContainer.append(courseThemes)
		courseThemes.append(circle)
		circle.append(circleInCircle)

		//центральная инфа
		const centerInfo = document.createElement("div")
		centerInfo.className = "center-info"

		//заглавие
		const title = document.createElement("h2")
		title.innerHTML = course[i].title

		//краткая информация про курс
		const info = document.createElement("p")
		info.innerHTML = course[i].info

		//вывод список тем 
		const paragraph = document.createElement("p")

		courseThemes.append(centerInfo)
		centerInfo.append(title)
		centerInfo.append(info)
		centerInfo.append(paragraph)

		//темы
		const divLessonsThemes = document.createElement("div")
		divLessonsThemes.className = "lessons-themes"
		centerInfo.append(divLessonsThemes)

		//блок для списка
		const olList = document.createElement("details")
		divLessonsThemes.append(olList)

		//цикл для проверки количества тем
		for (let j = 0; j < course[i].themes.length; j++) {

			if (j < 1) {
				const titleListItem = document.createElement("summary")
				titleListItem.innerHTML = "Показати список тем"
				olList.append(titleListItem)
			}
			//отдельная тема блок
			const listItem = document.createElement("p")
			olList.append(listItem)

			//название темы и ссылка
			const listItemLink = document.createElement("a")
			listItemLink.setAttribute("onclick", `createLesson(${i},${j})`)
			listItemLink.innerHTML = `${course[i].themes[j].title}`
			listItem.append(listItemLink)
		}
	}
}

//удаление блоков с курсами
const courseClose = () => {
	const divСourse = document.querySelectorAll(".right-container__bottom-themes")
	for (let i = 0; i < divСourse.length; i++) {
		if (divСourse) divСourse[i].remove()
	}
}

//функция для крестика закрыть окно урока
const crossClose = () => {

	const menuRight = document.querySelector(".rightMenu")
	if (menuRight) menuRight.remove()

	const divWindow = document.querySelector(".window-leson")
	if (divWindow) divWindow.remove()
	closeRightMenu()
	courseClose()
	courseOutput(course)

}

//функция что бы создать окно удалив предыдущее окно если оно есть 
const createLesson = (idCourse, idTheme) => {
	courseClose()

	crossClose()

	const menuRight = document.querySelector(".rightMenu")
	if (menuRight) menuRight.remove
	rightMenu(course, idCourse, idTheme)

	const body = document.querySelector("body")

	//создаем блок окна
	const window = document.createElement("div")
	window.className = "window-leson"

	//закидываем просто в тело
	body.append(window)

	//верзний блок с видео, заголовком, инфой под заголовок и крестик
	const videoTitle = document.createElement("div")
	videoTitle.className = "video__title"
	window.append(videoTitle)

	//Если есть видос, создаем видео
	if (course[idCourse].themes[idTheme].video) {
		const iframe = document.createElement("iframe")
		iframe.classList = "video"
		iframe.setAttribute("src", course[idCourse].themes[idTheme].video)
		iframe.setAttribute("title", "YouTube video player")
		iframe.setAttribute("frameborder", 0)
		iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture")
		iframe.setAttribute("allowfullscreen", '')
		videoTitle.append(iframe)
	}

	//Правая информация блок
	const rightInfo = document.createElement("div")
	rightInfo.className = "right-info"
	videoTitle.append(rightInfo)

	//Заголовок
	const rightInfoTitle = document.createElement("h2")
	rightInfoTitle.innerHTML = `${course[idCourse].themes[idTheme].title}`
	rightInfo.append(rightInfoTitle)

	//информация под заголовком
	const rightInfoInfo = document.createElement("p")
	rightInfoInfo.innerHTML = course[idCourse].themes[idTheme].info
	rightInfo.append(rightInfoInfo)

	//кнопка крестика
	const button = document.createElement("button")
	button.className = "cross"
	button.innerHTML = "<img src=image/cross.png alt=cross>"
	button.setAttribute("onclick", "crossClose()")
	videoTitle.append(button)

	//Поле для тестов
	if (course[idCourse].themes[idTheme].type == "test") {

		const testsDiv = document.createElement("div")
		testsDiv.className = "testsDiv"
		testsDiv.innerHTML = "<h1>Тести</h1><hr>"

		let x = 0

		for (let i = 0; i < course[idCourse].themes[idTheme].test.length; i++) {


			if (course[idCourse].themes[idTheme].test[i].type == "one") {
				const titleOneTest = document.createElement("h3")
				titleOneTest.innerHTML = `${i + 1}. ${course[idCourse].themes[idTheme].test[i].question}`
				testsDiv.append(titleOneTest)

				for (let j = 0; j < course[idCourse].themes[idTheme].test[i].answers.length; j++) {
					const divForInput = document.createElement("div")
					divForInput.setAttribute("id", `divForInput${j}`)
					const inputOne = document.createElement("input")
					inputOne.className = "inputOne"
					inputOne.setAttribute("id", `inputOne${i}`)
					inputOne.setAttribute("type", `radio`)
					inputOne.setAttribute("name", `inputOne${i}`)
					inputOne.setAttribute("value", course[idCourse].themes[idTheme].test[i].answers[j].id)

					const label = document.createElement("label")


					label.setAttribute("id", `label${x}`)
					label.setAttribute("for", `inputOne${i}`)
					label.innerHTML = course[idCourse].themes[idTheme].test[i].answers[j].answer

					divForInput.append(inputOne)
					divForInput.append(label)

					testsDiv.append(divForInput)
					x++
				}

			}
			if (course[idCourse].themes[idTheme].test[i].type == "lot") {
				const titleOneTest = document.createElement("h3")
				titleOneTest.innerHTML = `${i + 1}. ${course[idCourse].themes[idTheme].test[i].question}`
				testsDiv.append(titleOneTest)

				for (let j = 0; j < course[idCourse].themes[idTheme].test[i].answers.length; j++) {
					const divForInput = document.createElement("div")
					divForInput.setAttribute("id", `divForInput${j}`)
					const inputOne = document.createElement("input")
					inputOne.className = "inputOne"
					inputOne.setAttribute("id", `inputOne${i}`)
					inputOne.setAttribute("type", `checkbox`)
					inputOne.setAttribute("name", `inputOne${i}`)
					inputOne.setAttribute("value", course[idCourse].themes[idTheme].test[i].answers[j].id)

					const label = document.createElement("label")


					label.setAttribute("id", `label${x}`)
					label.setAttribute("for", `inputOne${i}`)
					label.innerHTML = course[idCourse].themes[idTheme].test[i].answers[j].answer

					divForInput.append(inputOne)
					divForInput.append(label)

					testsDiv.append(divForInput)
					x++
				}

			}

			else if (course[idCourse].themes[idTheme].test[i].type == "write") {
				const titleOneTest = document.createElement("h3")
				titleOneTest.innerHTML = `${i + 1}. ${course[idCourse].themes[idTheme].test[i].question}`
				testsDiv.append(titleOneTest)


				if (course[idCourse].themes[idTheme].test[i].code) {
					const pre = document.createElement("pre")
					const code = document.createElement("code")
					code.innerHTML = course[idCourse].themes[idTheme].test[i].code

					pre.append(code)
					testsDiv.append(pre)
				}
				for (let j = 0; j < course[idCourse].themes[idTheme].test[i].answers.length; j++) {
					const divForInput = document.createElement("div")

					const inputOne = document.createElement("input")
					inputOne.className = "inputWrite"
					inputOne.setAttribute("id", `inputOne${i}`)
					inputOne.setAttribute("name", course[idCourse].themes[idTheme].test[i].answers[j].answer)

					inputOne.setAttribute("placeholder", course[idCourse].themes[idTheme].test[i].answers[j].id)



					divForInput.append(inputOne)


					testsDiv.append(divForInput)
				}
			}
		}



		window.append(testsDiv)

		const buttonVerifyDiv = document.createElement("div")
		buttonVerifyDiv.className = "buttonVerifyDiv"

		const buttonVerify = document.createElement("button")
		buttonVerify.className = "buttonVerify"
		buttonVerify.setAttribute("onclick", `verify(${idCourse},${idTheme})`)
		buttonVerify.innerHTML = "Перевірити"

		buttonVerifyDiv.append(buttonVerify)
		window.append(buttonVerifyDiv)


	}
	else if (course[idCourse].themes[idTheme].type == "cards") {
		for (let i = 0; i < course[idCourse].themes[idTheme].card.length; i++) {

			const questionAndAnswersDiv = document.createElement("div")

			const questionDiv = document.createElement("h3")
			questionDiv.className = "questionDiv"
			questionDiv.innerHTML = `${i + 1}. ${course[idCourse].themes[idTheme].card[i].question}`


			const details = document.createElement("details")
			const summary = document.createElement("summary")
			summary.innerHTML = "Показати відповідь"
			details.append(summary)

			const paragraf = document.createElement("p")
			paragraf.innerHTML = course[idCourse].themes[idTheme].card[i].answer
			details.append(paragraf)

			questionAndAnswersDiv.append(questionDiv)
			questionAndAnswersDiv.append(details)

			window.append(questionAndAnswersDiv)
		}

	}
	else {

		//нижний блок для остальной информации
		const bottomInformation = document.createElement("div")
		bottomInformation.className = "bottom-information"
		bottomInformation.innerHTML = course[idCourse].themes[idTheme].downInfo



		window.append(bottomInformation)

		//	Картинка
		if (course[idCourse].themes[idTheme].img) {
			const imgDiv = document.createElement("img")
			imgDiv.className = "image-theme"
			imgDiv.setAttribute("src", course[idCourse].themes[idTheme].img)
			imgDiv.setAttribute("alt", "Картинка в теме")
			window.append(imgDiv)
		}

		//Кусок кода
		if (course[idCourse].themes[idTheme].code) {
			const preDiv = document.createElement("pre")
			const codeDiv = document.createElement("code")

			codeDiv.innerHTML = course[idCourse].themes[idTheme].code

			preDiv.append(codeDiv)

			window.append(preDiv)
		}
	}
	//Кнопки вперед и назад
	const divButtons = document.createElement("div")
	divButtons.className = "buttons-next-back"

	const buttonNext = document.createElement("button")
	const buttonBack = document.createElement("button")

	buttonBack.innerHTML = "Назад"
	buttonNext.innerHTML = "Далі"


	if (idTheme == 0) {
		if (idCourse > 0) buttonBack.setAttribute("onclick", `createLesson(${idCourse - 1}, ${course[idCourse - 1].themes.length - 1})`)
		else {
			buttonBack.setAttribute("onclick", "")
			buttonBack.style.cursor = "no-drop"
		}
	}
	else if (idTheme > 0) {
		buttonBack.setAttribute("onclick", `createLesson(${idCourse}, ${idTheme - 1})`)
	}

	if (idTheme == course[idCourse].themes.length - 1) {
		if (idCourse < course.length - 1) buttonNext.setAttribute("onclick", `createLesson(${idCourse + 1}, 0)`)
		else {
			buttonNext.setAttribute("onclick", "")
			buttonNext.style.cursor = "no-drop"
		}
	}
	else if (idTheme < course[idCourse].themes.length - 1) {
		buttonNext.setAttribute("onclick", `createLesson(${idCourse}, ${idTheme + 1})`)
	}
	divButtons.append(buttonBack)
	divButtons.append(buttonNext)
	window.append(divButtons)


	goUp()

}

var timeOut;
function goUp() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top > 0) {
		window.scrollBy(0, -100);
		timeOut = setTimeout('goUp()', 20);
	} else clearTimeout(timeOut);
}

//Удаление блока с тестом
const testClose = () => {
	const divTest = document.querySelector(".form-test")
	if (divTest) divTest.remove()
	courseClose()

}

function verify(idCourse, idTheme) {
	const buttonVerifyDiv = document.querySelector(".buttonVerifyDiv")


	const input = document.querySelectorAll(".inputOne")
	var trueInput = 0

	var allTrueAnswers = 0


	for (let i = 0; i < input.length; i++) {

		if (input[i].value == "yes") {
			allTrueAnswers++
		}

		if (input[i].checked) {
			if (input[i].value == "yes") {
				const labelg = document.getElementById(`label${i}`)
				labelg.style.backgroundColor = "greenyellow";

				trueInput++
			} else {
				const labelg = document.getElementById(`label${i}`)
				labelg.style.backgroundColor = "rgb(255, 190, 190)";
			}
		}
	}


	const inputWrite = document.querySelectorAll(".inputWrite")


	for (let i = 0; i < inputWrite.length; i++) {
		if (inputWrite[i].value == inputWrite[i].name) {
			inputWrite[i].style.backgroundColor = "greenyellow";
			trueInput++

		}
		else inputWrite[i].style.backgroundColor = "rgb(255, 190, 190)";
	}

	const buttonVerify = document.querySelector(".buttonVerify")



	allTrueAnswers += inputWrite.length

	if (allTrueAnswers == trueInput) {
		buttonVerify.remove()
		const message = document.createElement("h3")
		message.innerHTML = `Ви дали відповідь на всі запитання вірно!`
		message.style.color = "green"
		buttonVerifyDiv.append(message)
	} else {
		buttonVerify.innerHTML = "Спробувати ще раз"
		buttonVerify.setAttribute("onclick", `createLesson(${idCourse},${idTheme})`)
		const message = document.createElement("h3")
		message.innerHTML = `Результат: ${trueInput} із ${allTrueAnswers}.`
		message.style.borderBottom = "1px solid black"
		buttonVerifyDiv.append(message)
	}
}

const rightMenu = (course, courseId, themeId) => {
	closeRightMenu()
	const container = document.querySelector(".container")

	const imageForback = document.createElement("div")
	imageForback.className = "imageForback"

	const menuDiv = document.createElement("div")
	menuDiv.className = "rightMenu"
	imageForback.append(menuDiv)
	container.append(imageForback)

	for (let i = 0; i < course.length; i++) {
		const themeTitle = document.createElement("details")
		themeTitle.className = "themeTitle-list"


		const summaryThemes = document.createElement("h3")
		summaryThemes.innerHTML = `${i + 1}. ${course[i].title}`

		menuDiv.append(summaryThemes)
		menuDiv.append(themeTitle)

		const hThemes = document.createElement("summary")
		hThemes.innerHTML = `Список тем`

		themeTitle.append(hThemes)

		for (let j = 0; j < course[i].themes.length; j++) {
			const themeLink = document.createElement("h4")
			themeLink.setAttribute("onClick", `createLesson(${i},${j})`)
			themeLink.className = "themeList"
			themeLink.style.marginLeft = "30px"

			if (i == courseId && j == themeId) themeLink.style.color = "orange"

			themeLink.innerHTML = `${course[i].themes[j].title}`
			themeTitle.append(themeLink)
		}

	}

}

const closeRightMenu = () => {
	const menu = document.querySelector(".imageForback")
	if (menu) menu.remove()

}

//--------------------------------------------------------------------------------------------------------
courseOutput(course)