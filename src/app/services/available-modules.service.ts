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
      icon: "buildings"
    },
    {
      id: 2,
      title: "Запаси",
      icon: "house-lock"
    },
    {
      id: 3,
      title: "Кошти і розрахунки",
      icon: "cash-coin"
    },
    {
      id: 4,
      title: "Заробітна плата",
      icon: "people"
    },
    {
      id: 5,
      title: "Облік власного капіталу та фінансових інвестицій",
      icon: "folder-plus"
    },
    {
      id: 6,
      title: "Реалізація продукції, товарів, робіт, послуг",
      icon: "cart4"
    },
    {
      id: 7,
      title: "Облік на позабалансових рахунках",
      icon: "file-earmark-binary"
    },
    {
      id: 8,
      title: "Облік доходів, витрат та результатів діяльності",
      icon: "bar-chart"
    },
    {
      id: 9,
      title: "Звітність",
      icon: "calendar2-check"
    },
    {
      id: 10,
      title: "Додаткові модулі",
      icon: "boxes"
    },
    {
      id: 11,
      title: "Ведення НДІ",
      icon: "archive"
    },
    {
      id: 12,
      title: "Адміністрування",
      icon: "tools"
    }
  ];

  private submodules: Submodule[] = [
    {
      moduleId: 1,
      title: "Основні засоби",
      url: "not-available"
    },
    {
      moduleId: 1,
      title: "Малоцінні необоротні матеріальні активи (МНМА)",
      url: "not-available"
    },
    {
      moduleId: 1,
      title: "Інші необоротні матеріальні активи (ІНМА)",
      url: "not-available"
    },
    {
      moduleId: 1,
      title: "Нематеріальні активи (НА)",
      url: "not-available"
    },
    {
      moduleId: 1,
      title: "Незавершені капітальні інвестиції",
      url: "not-available"
    },
    {
      moduleId: 1,
      title: "Облік ремонтів ОЗ",
      url: "not-available"
    },
    {
      moduleId: 1,
      title: "Незавершені капітальні інвестиції. Служба НКБ",
      url: "not-available"
    },
    {
      moduleId: 1,
      title: "Будівлі, споруди, автотранспорт служби БМЕС",
      url: "not-available"
    },
    {
      moduleId: 1,
      title: "Облік ремонтів вагонів",
      url: "not-available"
    },
    {
      moduleId: 2,
      title: "Облік запасів на складі",
      url: "not-available"
    },
    {
      moduleId: 2,
      title: "Бухгалтерський облік запасів",
      url: "not-available"
    },
    {
      moduleId: 2,
      title: "Облік спецодягу",
      url: "not-available"
    },
    {
      moduleId: 2,
      title: "Облік малоцінних і швидкозношуваних предметів",
      url: "not-available"
    },
    {
      moduleId: 2,
      title: "Облік спецодягу та ЗІЗ",
      url: "not-available"
    },
    {
      moduleId: 2,
      title: "Облік староординатних запасів",
      url: "not-available"
    },
    {
      moduleId: 2,
      title: "Облік ТМЦ на складі",
      url: "not-available"
    },
    {
      moduleId: 2,
      title: "Облік закупівель та постачання ТМЦ",
      url: "not-available"
    },
    {
      moduleId: 2,
      title: "Облік медикаментів",
      url: "not-available"
    },
    {
      moduleId: 3,
      title: "Кошти (банк)",
      url: "not-available"
    },
    {
      moduleId: 3,
      title: "Кошти (каса)",
      url: "not-available"
    },
    {
      moduleId: 3,
      title: "Кошти (банк - валютні розрахунки)",
      url: "not-available"
    },
    {
      moduleId: 3,
      title: "Облік розрахунків з дебіторами - кредиторами",
      url: "not-available"
    },
    {
      moduleId: 3,
      title: "Облік орендних операцій",
      url: "not-available"
    },
    {
      moduleId: 3,
      title: "Облік внутрішніх та внутрішньогосподарських розрахунків",
      url: "not-available"
    },
    {
      moduleId: 3,
      title: "Фінансові моделі господарської діяльності",
      url: "not-available"
    },
    {
      moduleId: 3,
      title: "Кошти (каса - валютні розрахунки)",
      url: "not-available"
    },
    {
      moduleId: 3,
      title: "Централізоване фінансування",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Кадри",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Зарплата",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Статистична звітність по зарплаті",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Податкові розрахунки по зарплаті",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Розрахунки з пенсійним фондом по зарплаті",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "ЛокБриг",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Розрахунки з бюджетними фондами по зарплаті",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Табель обліку робочого часу",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Щомісячна персоніфікація (Пенсійний фонд)",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Зарплата (наряди, маршрути провідників)",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Зарплата (Розрахунок маршрутів провідників)",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Зарплата (Довідник Номенклатури видів оплати)",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Єдиний внесок - Розрахунки з фондом соціального страхування",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Розрахунок оплати за дні хвороби та зарплати",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Облік талонів на харчування",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Документи по зарплаті",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Аліменти, депоненти",
      url: "not-available"
    },
    {
      moduleId: 4,
      title: "Розподіл виконавчих робіт по зарплаті",
      url: "not-available"
    },
    {
      moduleId: 5,
      title: "Облік власного капіталу",
      url: "not-available"
    },
    {
      moduleId: 5,
      title: "Облік фінансових інвестицій",
      url: "not-available"
    },
    {
      moduleId: 6,
      title: "Реалізація продукції, товарів, робіт, послуг",
      url: "not-available"
    },
    {
      moduleId: 6,
      title: "Реалізація продукції, товарів, робіт, послуг (ЗБ)",
      url: "not-available"
    },
    {
      moduleId: 7,
      title: "Облік на позабалансових рахунках",
      url: "not-available"
    },
    {
      moduleId: 8,
      title: "Облік доходів та результатів діяльності",
      url: "not-available"
    },
    {
      moduleId: 8,
      title: "Облік витрат",
      url: "not-available"
    },
    {
      moduleId: 9,
      title: "АРМ 'Фінансова звітність'",
      url: "not-available"
    },
    {
      moduleId: 9,
      title: "Фінансова та галузева статистична звітність",
      url: "not-available"
    },
    {
      moduleId: 9,
      title: "Статистична звітність",
      url: "not-available"
    },
    {
      moduleId: 9,
      title: "Оборотний баланс та Головна книга (звіт)",
      url: "not-available"
    },
    {
      moduleId: 9,
      title: "Відомості, оперативні та аналітичні довідки",
      url: "not-available"
    },
    {
      moduleId: 9,
      title: "Календар бухгалтера",
      url: "not-available"
    },
    {
      moduleId: 9,
      title: "Зведена фінансова та податкова звітність",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік промислового виробництва",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік торгівлі, в т.ч. вагони-ресторани",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік громадського харчування",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Нарахування комунальних платежів",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік автотранспорту",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік водопостачання",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік використання енергоносіїв",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік використання форменого одягу",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік сервісного обслуговування абонентів телефонної мережі",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік спільної діяльності",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік будівельних контрактів",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Кошторис",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік паливного складу",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік харчування для пансіонатів",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Облік виробництва та реалізації промислової продукції",
      url: "not-available"
    },
    {
      moduleId: 10,
      title: "Реєстрація відповідальних пансіонатів",
      url: "not-available"
    },
    {
      moduleId: 11,
      title: "Ведення Нормативно-довідкової інформації системи",
      url: "not-available"
    },
    {
      moduleId: 11,
      title: "Ведення зовнішніх класифікаторів системи",
      url: "not-available"
    },
    {
      moduleId: 11,
      title: "Імпорт довідників із загальносистемних класифікаторів",
      url: "not-available"
    },
    {
      moduleId: 11,
      title: "Робота з договорами",
      url: "not-available"
    },
    {
      moduleId: 12,
      title: "Користувачі",
      url: "users"
    },
    {
      moduleId: 12,
      title: "Права та ролі користувачів",
      url: "not-available"
    },
    {
      moduleId: 12,
      title: "Налаштування системи",
      url: "not-available"
    }
  ]

  constructor() { }

  getModules(): Module[] {
    const modules: Module[] = [];

    this.availableModules.forEach(am => modules.push(am))

    return modules;
  }

  getModule(id: number): Module {
    let particularModule: Module = {
      id: 0,
      title: '',
      icon: ''
    };

    const foundModule = this.availableModules.find(am => am.id === id)
    if (foundModule) {
      particularModule.id = foundModule.id;
      particularModule.title = foundModule.title;
      particularModule.icon = foundModule.icon;
    }

    return particularModule;
  }

  getSubmodule(index: number): Submodule[] {
    return this.submodules.filter(s => s.moduleId === index);
  }
}
