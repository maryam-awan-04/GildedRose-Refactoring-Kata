import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  describe('Regular item', () => {
    it('should degrade in quality by one before its sell by date', () => {
      const gildedRose = new GildedRose([new Item('foo', 100, 40)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(39);
    });

    it('should degrade in quality by two after its sell by date', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, 40)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(38);
    });

    it('the quality cannot be negative', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it('the quality cannot exceed 50', () => {
      const gildedRose = new GildedRose([new Item('foo', 50, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Sulfuras, Hand of Ragnaros', () => {
    it('should not degrade in quality before sell by date', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 100, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
    });

    it('should not degrade in quality before sell by date', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
    });
  });

  describe('Aged Brie', () => {
    it('increases in quality by one as days pass', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 100, 40)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(41);
    });

    it('the quality cannot exceed 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 50, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('quality increases by 2 if there are 10 days or less before the item must be sold', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(42);
    });

    it('quality increases by 3 if there are 5 days or less before the item must be sold', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(43);
    });

    it('quality drops to 0 after the concert', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });
});
