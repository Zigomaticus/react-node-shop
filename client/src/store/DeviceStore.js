import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Телевизоры" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Honor" },
      { id: 4, name: "Asus" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 100000,
        rating: 5,
        img: "https://www.hdretail.ru/upload/iblock/8d0/8d01c02a7a68c45e7d021d9d44efab9f.jpg",
      },
      {
        id: 2,
        name: "Honor 10",
        price: 100000,
        rating: 5,
        img: "https://www.hdretail.ru/upload/iblock/8d0/8d01c02a7a68c45e7d021d9d44efab9f.jpg",
      },
      {
        id: 3,
        name: "Samsung galaxy",
        price: 100000,
        rating: 5,
        img: "https://www.hdretail.ru/upload/iblock/8d0/8d01c02a7a68c45e7d021d9d44efab9f.jpg",
      },
      {
        id: 4,
        name: "Nokia 3310",
        price: 100000,
        rating: 5,
        img: "https://www.hdretail.ru/upload/iblock/8d0/8d01c02a7a68c45e7d021d9d44efab9f.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedTyp(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this.selectedBrand;
  }
}
