import { Injectable } from '@angular/core';
import { Module } from '../interfaces/module';
import { Submodule } from '../interfaces/submodule';

@Injectable({
  providedIn: 'root'
})
export class AvailableModulesService {
  private availableModules: Module[] = [
    {
      id: 1,
      title: "Необоротні активи",
      icon: "building-check",
      url: ""
    },
    {
      id: 2,
      title: "Запаси",
      icon: "house-lock",
      url: ""
    },
    {
      id: 3,
      title: "Кошти і розрахунки",
      icon: "cash-coin",
      url: ""
    },
    {
      id: 4,
      title: "Заробітна плата",
      icon: "people",
      url: ""
    },
    {
      id: 5,
      title: "Облік власного капіталу та фінансових інвестицій",
      icon: "folder-plus",
      url: ""
    },
    {
      id: 6,
      title: "Реалізація продукції, товарів, робіт, послуг",
      icon: "tools",
      url: ""
    },
    {
      id: 7,
      title: "Облік на позабалансових рахунках",
      icon: "book-half",
      url: ""
    },
    {
      id: 8,
      title: "Облік доходів, витрат та результатів діяльності",
      icon: "bar-chart",
      url: ""
    },
    {
      id: 9,
      title: "Звітність",
      icon: "calendar2-check",
      url: ""
    },
    {
      id: 10,
      title: "Додаткові модулі",
      icon: "boxes",
      url: ""
    },
    {
      id: 11,
      title: "Ведення НДІ",
      icon: "archive",
      url: ""
    },
    {
      id: 12,
      title: "Адміністрування",
      icon: "sliders2-vertical",
      url: "users-management",
    }
  ];

  private submodules: Submodule[] = [
    {
      moduleId: 1,
      title: "Основні засоби",
      path: "#"
    },
    {
      moduleId: 1,
      title: "Малоцінні необоротні матеріальні активи (МНМА)",
      path: "#"
    },
    {
      moduleId: 1,
      title: "Інші необоротні матеріальні активи (ІНМА)",
      path: "#"
    },
    {
      moduleId: 1,
      title: "Нематеріальні активи (НА)",
      path: "#"
    },
    {
      moduleId: 1,
      title: "Незавершені капітальні інвестиції",
      path: "#"
    },
    {
      moduleId: 1,
      title: "Облік ремонтів ОЗ",
      path: "#"
    },
    {
      moduleId: 1,
      title: "Незавершені капітальні інвестиції. Служба НКБ",
      path: "#"
    },
    {
      moduleId: 1,
      title: "Будівлі, споруди, автотранспорт служби БМЕС",
      path: "#"
    },
    {
      moduleId: 1,
      title: "Облік ремонтів вагонів",
      path: "#"
    },
    {
      moduleId: 2,
      title: "Облік запасів на складі",
      path: "#"
    },
    {
      moduleId: 2,
      title: "Бухгалтерський облік запасів",
      path: "#"
    },
    {
      moduleId: 2,
      title: "Облік спецодягу",
      path: "#"
    },
    {
      moduleId: 2,
      title: "Облік малоцінних і швидкозношуваних предметів",
      path: "#"
    },
    {
      moduleId: 2,
      title: "Облік спецодягу та ЗІЗ",
      path: "#"
    },
    {
      moduleId: 2,
      title: "Облік староординатних запасів",
      path: "#"
    },
    {
      moduleId: 2,
      title: "Облік ТМЦ на складі",
      path: "#"
    },
    {
      moduleId: 2,
      title: "Облік закупівель та постачання ТМЦ",
      path: "#"
    },
    {
      moduleId: 2,
      title: "Облік медикаментів",
      path: "#"
    },
    {
      moduleId: 3,
      title: "Кошти (банк)",
      path: "#"
    },
    {
      moduleId: 3,
      title: "Кошти (каса)",
      path: "#"
    },
    {
      moduleId: 3,
      title: "Кошти (банк - валютні розрахунки)",
      path: "#"
    },
    {
      moduleId: 3,
      title: "Облік розрахунків з дебіторами - кредиторами",
      path: "#"
    },
    {
      moduleId: 3,
      title: "Облік орендних операцій",
      path: "#"
    },
    {
      moduleId: 3,
      title: "Облік внутрішніх та внутрішньогосподарських розрахунків",
      path: "#"
    },
    {
      moduleId: 3,
      title: "Фінансові моделі господарської діяльності",
      path: "#"
    },
    {
      moduleId: 3,
      title: "Кошти (каса - валютні розрахунки)",
      path: "#"
    },
    {
      moduleId: 3,
      title: "Централізоване фінансування",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Кадри",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Зарплата",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Статистична звітність по зарплаті",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Податкові розрахунки по зарплаті",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Розрахунки з пенсійним фондом по зарплаті",
      path: "#"
    },
    {
      moduleId: 4,
      title: "ЛокБриг",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Розрахунки з бюджетними фондами по зарплаті",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Табель обліку робочого часу",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Щомісячна персоніфікація (Пенсійний фонд)",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Зарплата (наряди, маршрути провідників)",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Зарплата (Розрахунок маршрутів провідників)",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Зарплата (Довідник Номенклатури видів оплати)",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Єдиний внесок - Розрахунки з фондом соціального страхування",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Розрахунок оплати за дні хвороби та зарплати",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Облік талонів на харчування",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Документи по зарплаті",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Аліменти, депоненти",
      path: "#"
    },
    {
      moduleId: 4,
      title: "Розподіл виконавчих робіт по зарплаті",
      path: "#"
    },
    {
      moduleId: 5,
      title: "Облік власного капіталу",
      path: "#"
    },
    {
      moduleId: 5,
      title: "Облік фінансових інвестицій",
      path: "#"
    },
    {
      moduleId: 6,
      title: "Реалізація продукції, товарів, робіт, послуг",
      path: "#"
    },
    {
      moduleId: 6,
      title: "Реалізація продукції, товарів, робіт, послуг (ЗБ)",
      path: "#"
    },
    {
      moduleId: 7,
      title: "Облік на позабалансових рахунках",
      path: "#"
    },
    {
      moduleId: 8,
      title: "Облік доходів та результатів діяльності",
      path: "#"
    },
    {
      moduleId: 8,
      title: "Облік витрат",
      path: "#"
    },
    {
      moduleId: 9,
      title: "АРМ 'Фінансова звітність'",
      path: "#"
    },
    {
      moduleId: 9,
      title: "Фінансова та галузева статистична звітність",
      path: "#"
    },
    {
      moduleId: 9,
      title: "Статистична звітність",
      path: "#"
    },
    {
      moduleId: 9,
      title: "Оборотний баланс та Головна книга (звіт)",
      path: "#"
    },
    {
      moduleId: 9,
      title: "Відомості, оперативні та аналітичні довідки",
      path: "#"
    },
    {
      moduleId: 9,
      title: "Календар бухгалтера",
      path: "#"
    },
    {
      moduleId: 9,
      title: "Зведена фінансова та податкова звітність",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік промислового виробництва",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік торгівлі, в т.ч. вагони-ресторани",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік громадського харчування",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Нарахування комунальних платежів",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік автотранспорту",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік водопостачання",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік використання енергоносіїв",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік використання форменого одягу",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік сервісного обслуговування абонентів телефонної мережі",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік спільної діяльності",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік будівельних контрактів",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Кошторис",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік паливного складу",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік харчування для пансіонатів",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Облік виробництва та реалізації промислової продукції",
      path: "#"
    },
    {
      moduleId: 10,
      title: "Реєстрація відповідальних пансіонатів",
      path: "#"
    },
    {
      moduleId: 11,
      title: "Ведення Нормативно-довідкової інформації системи",
      path: "#"
    },
    {
      moduleId: 11,
      title: "Ведення зовнішніх класифікаторів системи",
      path: "#"
    },
    {
      moduleId: 11,
      title: "Імпорт довідників із загальносистемних класифікаторів",
      path: "#"
    },
    {
      moduleId: 11,
      title: "Робота з договорами",
      path: "#"
    },
    {
      moduleId: 12,
      title: "Користувачі",
      path: "users"
    },
    {
      moduleId: 12,
      title: "Права та ролі користувачів",
      path: "#"
    },
    {
      moduleId: 12,
      title: "Налаштування системи",
      path: "#"
    }
  ]

  constructor() { }

  getModules(): Module[] {
    const modules: Module[] = [];

    this.availableModules.forEach(am => modules.push(am))

    return modules;
  }

  getSubmodule(index: number): Submodule[] {
    const particularSubmodules: Submodule[] = [];

    this.submodules.forEach(s => s.moduleId == index ?? particularSubmodules.push(s));

    return particularSubmodules;
  }
}
