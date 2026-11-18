const menuData = {
    ui: {
        ar: { back: "← الرئيسية", currency: "ج.م", tax: "الأسعار شاملة الضريبة • نتمنى لكم وجبة شهية" },
        en: { back: "← Home", currency: "EGP", tax: "Prices include VAT • Bon Appétit" },
        fr: { back: "← Accueil", currency: "EGP", tax: "Prix TTC • Bon Appétit" },
        es: { back: "← Inicio", currency: "EGP", tax: "Precios con IVA incluido • Buen provecho" }
    },
    categories: [
        {
            id: "breakfast",
            name: { ar: "الإفطار", en: "Breakfast", fr: "Petit-Déjeuner", es: "Desayuno" },
            items: [
                {
                    name: {
                        ar: "فطور أسواني تقليدي",
                        en: "Traditional Aswani Breakfast",
                        fr: "Petit-Déjeuner Traditionnel d'Assouan",
                        es: "Desayuno Tradicional de Asuán"
                    },
                    desc: {
                        ar: "فول مدمس بالزيت الحار، فلافل، جبنة قريش بالطماطم، عسل أسود وطحينة، وخبز شمسي طازج",
                        en: "Fava beans, falafel, cottage cheese with tomatoes, black honey & tahini, served with fresh sun bread",
                        fr: "Fèves mijotées, falafels, fromage blanc aux tomates, mélasse noire, tahini et pain solaire frais",
                        es: "Habas cocidas, falafel, queso fresco con tomate, miel negra, tahini y pan de sol recién horneado"
                    },
                    price: 180
                },
                {
                    name: {
                        ar: "أومليت القبة الذهبية",
                        en: "Golden Dome Omelette",
                        fr: "Omelette Dôme Doré",
                        es: "Tortilla Cúpula Dorada"
                    },
                    desc: {
                        ar: "3 بيضات مع الجبنة الشيدر، المشروم الطازج، الفلفل الألوان، يقدم مع بطاطس هاش براون",
                        en: "3 eggs with cheddar cheese, fresh mushrooms, bell peppers, served with hash browns",
                        fr: "3 œufs au cheddar, champignons frais, poivrons, servis avec pommes de terre rissolées",
                        es: "3 huevos con queso cheddar, champiñones frescos y pimientos, acompañados de patatas hash brown"
                    },
                    price: 165
                },
                {
                    name: {
                        ar: "فطور كونتيننتال",
                        en: "Continental Breakfast",
                        fr: "Petit-Déjeuner Continental",
                        es: "Desayuno Continental"
                    },
                    desc: {
                        ar: "تشكيلة مخبوزات فرنسية، زبدة، مربى، سلطة فواكه موسمية، مع قهوة أو شاي",
                        en: "Assorted pastries, butter, jam, seasonal fruit salad, with coffee or tea",
                        fr: "Viennoiseries assorties, beurre, confiture, salade de fruits de saison, café ou thé",
                        es: "Bollería variada, mantequilla, mermelada, ensalada de frutas de temporada, café o té"
                    },
                    price: 195
                }
            ]
        },
        {
            id: "mains",
            name: { ar: "الأطباق الرئيسية", en: "Main Courses", fr: "Plats Principaux", es: "Platos Principales" },
            items: [
                {
                    name: {
                        ar: "طاجن سمك نيلي بالصلصة",
                        en: "Nile Fish Tagine",
                        fr: "Tajine de Poisson du Nil",
                        es: "Tajín de Pescado del Nilo"
                    },
                    desc: {
                        ar: "فيليه قشر بياض طازج مطهو في الفخار مع صلصة الطماطم المتبلة والأرز الصيادية",
                        en: "Fresh Nile perch fillet baked in clay pot with spiced tomato sauce & Sayadieh rice",
                        fr: "Filet de perche du Nil cuit au four en terre cuite, sauce tomate épicée et riz Sayadieh",
                        es: "Filete fresco de perca del Nilo horneado en cazuela de barro con salsa de tomate especiada y arroz Sayadieh"
                    },
                    price: 390
                },
                {
                    name: {
                        ar: "مشويات الجزيرة المشكلة",
                        en: "Island Mixed Grill",
                        fr: "Grillades Mixtes de l'Île",
                        es: "Parrillada Mixta de la Isla"
                    },
                    desc: {
                        ar: "كباب، كفتة مشوية على الفحم، شيش طاووق، يقدم مع أرز بسمتي وسلطة طحينة",
                        en: "Charcoal-grilled kebab, kofta, shish tawook, served with basmati rice & tahini",
                        fr: "Kebab, kofta et chich taouk grillés au charbon de bois, riz basmati et sauce tahini",
                        es: "Kebab, kofta y shish tawook a la brasa, acompañados de arroz basmati y salsa tahini"
                    },
                    price: 450
                },
                {
                    name: {
                        ar: "صدور دجاج بصوص الليمون والأعشاب",
                        en: "Herb & Lemon Grilled Chicken",
                        fr: "Poulet Grillé au Citron et aux Herbes",
                        es: "Pechuga de Pollo a la Parrilla con Limón y Hierbas"
                    },
                    desc: {
                        ar: "صدور دجاج مشوية متبلة بالأعشاب الجبلية مع خضار سوتيه وبطاطس مهروسة",
                        en: "Grilled chicken breast marinated in herbs with sautéed vegetables & mashed potatoes",
                        fr: "Blanc de poulet grillé mariné aux herbes, légumes sautés et purée de pommes de terre",
                        es: "Pechuga de pollo marinada en hierbas con verduras salteadas y puré de patatas"
                    },
                    price: 310
                },
                {
                    name: {
                        ar: "باستا ألفريدو بالمشروم",
                        en: "Mushroom Fettuccine Alfredo",
                        fr: "Fettuccine Alfredo aux Champignons",
                        es: "Fettuccine Alfredo con Champiñones"
                    },
                    desc: {
                        ar: "مكرونة فيتوتشيني بصوص الكريمة الغني والمشروم الطازج وجبنة البارميزان",
                        en: "Fettuccine pasta in rich cream sauce, fresh mushrooms & parmesan cheese",
                        fr: "Pâtes fettuccine à la sauce crémeuse, champignons frais et parmesan",
                        es: "Pasta fettuccine en salsa cremosa, champiñones frescos y queso parmesano"
                    },
                    price: 260
                }
            ]
        },
        {
            id: "drinks",
            name: { ar: "المشروبات", en: "Beverages", fr: "Boissons", es: "Bebidas" },
            items: [
                {
                    name: {
                        ar: "كركديه أسواني مثلج",
                        en: "Iced Aswani Hibiscus",
                        fr: "Hibiscus Glacé d'Assouan",
                        es: "Hibisco Helado de Asuán"
                    },
                    desc: {
                        ar: "منقوع زهور الكركديه الأسواني الفاخر مع لمسة نعناع طازج",
                        en: "Premium Aswani hibiscus infusion with a hint of fresh mint",
                        fr: "Infusion de fleurs d'hibiscus d'Assouan avec une touche de menthe fraîche",
                        es: "Infusión premium de flores de hibisco de Asuán con un toque de menta fresca"
                    },
                    price: 75
                },
                {
                    name: {
                        ar: "عصير مانجو أسواني فريش",
                        en: "Fresh Aswani Mango Juice",
                        fr: "Jus de Mangue Frais d'Assouan",
                        es: "Zumo Natural de Mango de Asuán"
                    },
                    desc: {
                        ar: "مانجو طبيعية 100% من مزارع أسوان",
                        en: "100% natural mango juice from Aswan farms",
                        fr: "Jus de mangue 100% naturel des vergers d'Assouan",
                        es: "Zumo de mango 100% natural de las huertas de Asuán"
                    },
                    price: 95
                },
                {
                    name: {
                        ar: "قهوة تركي / إسبريسو",
                        en: "Turkish Coffee / Espresso",
                        fr: "Café Turc / Expresso",
                        es: "Café Turco / Espresso"
                    },
                    desc: {
                        ar: "محمصة بعناية وتقدم حسب الرغبة",
                        en: "Freshly roasted and brewed to your preference",
                        fr: "Fraîchement torréfié et préparé selon votre goût",
                        es: "Recién tostado y preparado a su gusto"
                    },
                    price: 65
                },
                {
                    name: {
                        ar: "كابتشينو / لاتيه",
                        en: "Cappuccino / Cafe Latte",
                        fr: "Cappuccino / Café Latte",
                        es: "Capuchino / Café Latte"
                    },
                    desc: {
                        ar: "إسبريسو غني مع حليب مبخر ورغوة ناعمة",
                        en: "Rich espresso with steamed milk and velvety foam",
                        fr: "Expresso riche avec lait chaud et mousse onctueuse",
                        es: "Espresso intenso con leche vaporizada y espuma cremosa"
                    },
                    price: 85
                }
            ]
        },
        {
            id: "desserts",
            name: { ar: "الحلويات", en: "Desserts", fr: "Desserts", es: "Postres" },
            items: [
                {
                    name: {
                        ar: "أم علي بالمكسرات",
                        en: "Om Ali with Nuts",
                        fr: "Om Ali aux Fruits Secs",
                        es: "Om Ali con Frutos Secos"
                    },
                    desc: {
                        ar: "رقائق مخبوزة بالحليب والقشطة البلدي والمكسرات المحمصة",
                        en: "Baked pastry flakes with rich milk, cream, and roasted nuts",
                        fr: "Pâte feuilletée au lait, crème fraîche et fruits secs grillés",
                        es: "Hojaldre horneado con leche, crema y frutos secos tostados"
                    },
                    price: 120
                },
                {
                    name: {
                        ar: "تشيز كيك بالتمر الأسواني",
                        en: "Aswani Date Cheesecake",
                        fr: "Cheesecake aux Dattes d'Assouan",
                        es: "Tarta de Queso con Dátiles de Asuán"
                    },
                    desc: {
                        ar: "تشيز كيك كريمي مغطى بصوص التمر الأسواني الفاخر",
                        en: "Creamy cheesecake topped with rich Aswani date caramel sauce",
                        fr: "Cheesecake crémeux nappé d'une sauce caramel aux dattes d'Assouan",
                        es: "Cremosa tarta de queso cubierta con salsa de dátiles de Asuán"
                    },
                    price: 145
                }
            ]
        }
    ]
};