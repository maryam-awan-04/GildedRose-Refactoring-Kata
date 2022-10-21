export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case ('Sulfuras, Hand of Ragnaros'):
          continue;
        case ('Aged Brie'):
          if (this.items[i].quality < 50) {
            this.items[i].quality += 1
          }
          else {
            continue
          }
          continue
        case ('Backstage passes to a TAFKAL80ETC concert'):
          if (this.items[i].quality < 50) {
            if (this.items[i].sellIn > 5 && this.items[i].sellIn < 11) {
              this.items[i].quality += 2
            }
            else if (this.items[i].sellIn > 0 && this.items[i].sellIn < 6) {
              this.items[i].quality += 3
            }
            else if (this.items[i].sellIn === 0) {
              this.items[i].quality = 0
            }
          }
          else {
            continue
          }
          continue
        case 'Conjured Item':
          if (this.items[i].quality === 0 || this.items[i].quality >= 50) {
            continue
          }
          else {
            if (this.items[i].sellIn >= 1) {
              this.items[i].quality = this.items[i].quality - 2
            }
            else if (this.items[i].sellIn <= 0) {
              this.items[i].quality = this.items[i].quality - 4
            }
          }
          continue
        default:
          if (this.items[i].quality === 0 || this.items[i].quality >= 50) {
            continue
          }
          else {
            if (this.items[i].sellIn >= 1) {
              this.items[i].quality = this.items[i].quality - 1
            }
            else if (this.items[i].sellIn <= 0) {
              this.items[i].quality = this.items[i].quality - 2
            }
          }
          continue
      }
    }

    return this.items;
  }
}
