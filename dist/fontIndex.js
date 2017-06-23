'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const fontIndex = {
  'Featured FIGlet Fonts': ['3D Diagonal', 'Alpha', 'Acrobatic', 'Avatar', 'Big Money-ne', 'Big Money-nw', 'Big Money-se', 'Big Money-sw', 'Big', 'Blocks', 'Bulbhead', 'Cards', 'Chiseled', 'Crawford2', 'Crazy', 'Dancing Font', 'Doh', 'Doom', 'Efti Wall', 'Epic', 'Fire Font-k', 'Fire Font-s', 'Flower Power', 'Fun Face', 'Fun Faces', 'Ghost', 'Graceful', 'Graffiti', 'Impossible', 'Isometric1', 'Isometric2', 'Isometric3', 'Isometric4', 'JS Bracket Letters', 'Lil Devil', 'Merlin1', 'Modular', 'Ogre', 'Patorjk\'s Cheese', 'Patorjk-HeX', 'Rectangles', 'Slant', 'Slant Relief', 'Small', 'Small Slant', 'Small Isometric1', 'Soft', 'Standard', 'Star Wars', 'Sub-Zero', 'Swamp Land', 'Sweet', 'Train', 'Twisted', 'Wet Letter', 'Varsity'],
  'ANSI FIGlet Fonts': ['3D-ASCII', 'ANSI Shadow', 'Bloody', 'Calvin S', 'Delta Corps Priest 1', 'Electronic', 'Elite', 'Stronger Than All', 'THIS', 'The Edge'],
  'Regular FIGlet Fonts': ['1Row', '3-D', '3x5', '4Max', '5 Line Oblique', 'AMC 3 Line', 'AMC 3 Liv1', 'AMC AAA01', 'AMC Neko', 'AMC Razor', 'AMC Razor2', 'AMC Slash', 'AMC Slider', 'AMC Thin', 'AMC Tubes', 'AMC Untitled', 'ASCII New Roman', 'Alligator', 'Alligator2', 'Alphabet', 'Arrows', 'Banner', 'Banner3-D', 'Banner3', 'Banner4', 'Barbwire', 'Basic', 'Bear', 'Bell', 'Benjamin', 'Big Chief', 'Bigfig', 'Binary', 'Block', 'Bolger', 'Braced', 'Bright', 'Broadway KB', 'Broadway', 'Bubble', 'Caligraphy', 'Caligraphy2', 'Catwalk', 'Chunky', 'Coinstak', 'Cola', 'Colossal', 'Computer', 'Contessa', 'Contrast', 'Cosmike', 'Crawford', 'Cricket', 'Cursive', 'Cyberlarge', 'Cybermedium', 'Cybersmall', 'Cygnet', 'DANC4', 'DWhistled', '\n\n', 'Decimal', 'Def Leppard', 'Diamond', 'Diet Cola', 'Digital', 'Dot Matrix', 'Double Shorts', 'Double', 'Dr Pepper', 'Efti Chess', 'Efti Font', 'Efti Italic', 'Efti Piti', 'Efti Robot', 'Efti Water', 'Fender', 'Filter', 'Flipped', 'Four Tops', 'Fraktur', 'Fuzzy', 'Georgi16', 'Georgia11', 'Ghoulish', 'Glenyn', 'Goofy', 'Gothic', 'Gradient', 'Greek', 'Heart Left', 'Heart Right', 'Henry 3D', 'Hex', 'Hieroglyphs', 'Hollywood', 'Horizontal Left', 'Horizontal Right', 'ICL-1900', 'Invita', '\n\n', 'Italic', 'Ivrit', 'JS Block Letters', 'JS Capital Curves', 'JS Cursive', 'JS Stick Letters', 'Jacky', 'Jazmine', 'Jerusalem', 'Katakana', 'Kban', 'Keyboard', 'Knob', 'LCD', 'Larry 3D', 'Lean', 'Letters', 'Line Blocks', 'Linux', 'Lockergnome', 'Madrid', 'Marquee', 'Maxfour', 'Merlin2', 'Mike', 'Mini', 'Mirror', 'Mnemonic', 'Morse', 'Moscow', 'Mshebrew210', 'Muzzle', 'NScript', 'NT Greek', 'NV Script', 'Nancyj-Fancy', 'Nancyj-Underlined', 'Nancyj', 'Nipples', 'O8', 'OS2', 'Octal', 'Old Banner', 'Pawp', 'Peaks Slant', 'Peaks', 'Pebbles', 'Pepper', 'Poison', 'Puffy', 'Puzzle', 'Pyramid', 'Rammstein', 'Relief', 'Relief2', 'Reverse', 'Roman', 'Rotated', 'Rounded', 'Rowan Cap', 'Rozzo', 'Runic', 'Runyc', 'S Blood', 'SL Script', 'Santa Clara', 'Script', 'Serifcap', 'Shadow', 'Shimrod', 'Short', 'Slide', 'Small Caps', 'Small Keyboard', 'Small Poison', 'Small Script', 'Small Shadow', 'Small Tengwar', 'Speed', 'Spliff', 'Stacey', 'Stampate', 'Stampatello', 'Star Strips', 'Stellar', 'Stforek', 'Stick Letters', 'Stop', 'Straight', 'Swan', 'Tanja', 'Tengwar', 'Term', 'Test1', 'Thick', 'Thin', 'Thorned', 'Three Point', 'Ticks Slant', 'Ticks', 'Tiles', 'Tinker-Toy', 'Tombstone', 'Trek', 'Tsalagi', 'Tubular', 'Two Point', 'USA Flag', 'Univers', 'Wavy', 'Weird', 'Whimsy', 'Wow'],
  'AOL Macro Fonts': ['Abraxis-Big', 'Abraxis-Small', 'Bent', 'Blest', 'Boie', 'Boie2', 'Bone\'s Font', 'CaMiZ', 'CeA', 'CeA2', 'Cheese', 'DaiR', 'Filth', 'FoGG', 'Galactus', 'Glue', 'HeX\'s Font', 'Hellfire', 'MeDi', 'Mer', 'PsY', 'PsY2', 'Reeko Font 1', 'Ribbit', 'Ribbit2', 'Ribbit3', 'Sony', 'TRaC Mini', 'TRaC Tiny', 'TRaC\'s Old School Font', 'TRaC', 'Twiggy', 'X-Pose', 'X99', 'X992', 'Zodi']
};

exports.default = fontIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mb250SW5kZXguanMiXSwibmFtZXMiOlsiZm9udEluZGV4Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLFlBQVk7QUFDaEIsMkJBQXlCLENBQ3ZCLGFBRHVCLEVBRXZCLE9BRnVCLEVBR3ZCLFdBSHVCLEVBSXZCLFFBSnVCLEVBS3ZCLGNBTHVCLEVBTXZCLGNBTnVCLEVBT3ZCLGNBUHVCLEVBUXZCLGNBUnVCLEVBU3ZCLEtBVHVCLEVBVXZCLFFBVnVCLEVBV3ZCLFVBWHVCLEVBWXZCLE9BWnVCLEVBYXZCLFVBYnVCLEVBY3ZCLFdBZHVCLEVBZXZCLE9BZnVCLEVBZ0J2QixjQWhCdUIsRUFpQnZCLEtBakJ1QixFQWtCdkIsTUFsQnVCLEVBbUJ2QixXQW5CdUIsRUFvQnZCLE1BcEJ1QixFQXFCdkIsYUFyQnVCLEVBc0J2QixhQXRCdUIsRUF1QnZCLGNBdkJ1QixFQXdCdkIsVUF4QnVCLEVBeUJ2QixXQXpCdUIsRUEwQnZCLE9BMUJ1QixFQTJCdkIsVUEzQnVCLEVBNEJ2QixVQTVCdUIsRUE2QnZCLFlBN0J1QixFQThCdkIsWUE5QnVCLEVBK0J2QixZQS9CdUIsRUFnQ3ZCLFlBaEN1QixFQWlDdkIsWUFqQ3VCLEVBa0N2QixvQkFsQ3VCLEVBbUN2QixXQW5DdUIsRUFvQ3ZCLFNBcEN1QixFQXFDdkIsU0FyQ3VCLEVBc0N2QixNQXRDdUIsRUF1Q3ZCLG1CQXZDdUIsRUF3Q3ZCLGFBeEN1QixFQXlDdkIsWUF6Q3VCLEVBMEN2QixPQTFDdUIsRUEyQ3ZCLGNBM0N1QixFQTRDdkIsT0E1Q3VCLEVBNkN2QixhQTdDdUIsRUE4Q3ZCLGtCQTlDdUIsRUErQ3ZCLE1BL0N1QixFQWdEdkIsVUFoRHVCLEVBaUR2QixXQWpEdUIsRUFrRHZCLFVBbER1QixFQW1EdkIsWUFuRHVCLEVBb0R2QixPQXBEdUIsRUFxRHZCLE9BckR1QixFQXNEdkIsU0F0RHVCLEVBdUR2QixZQXZEdUIsRUF3RHZCLFNBeER1QixDQURUO0FBMkRoQix1QkFBcUIsQ0FDbkIsVUFE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aUI7QUEvUkgsQ0FBbEI7O2tCQXVVZUEsUyIsImZpbGUiOiJmb250SW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb250SW5kZXggPSB7XG4gICdGZWF0dXJlZCBGSUdsZXQgRm9udHMnOiBbXG4gICAgJzNEIERpYWdvbmFsJyxcbiAgICAnQWxwaGEnLFxuICAgICdBY3JvYmF0aWMnLFxuICAgICdBdmF0YXInLFxuICAgICdCaWcgTW9uZXktbmUnLFxuICAgICdCaWcgTW9uZXktbncnLFxuICAgICdCaWcgTW9uZXktc2UnLFxuICAgICdCaWcgTW9uZXktc3cnLFxuICAgICdCaWcnLFxuICAgICdCbG9ja3MnLFxuICAgICdCdWxiaGVhZCcsXG4gICAgJ0NhcmRzJyxcbiAgICAnQ2hpc2VsZWQnLFxuICAgICdDcmF3Zm9yZDInLFxuICAgICdDcmF6eScsXG4gICAgJ0RhbmNpbmcgRm9udCcsXG4gICAgJ0RvaCcsXG4gICAgJ0Rvb20nLFxuICAgICdFZnRpIFdhbGwnLFxuICAgICdFcGljJyxcbiAgICAnRmlyZSBGb250LWsnLFxuICAgICdGaXJlIEZvbnQtcycsXG4gICAgJ0Zsb3dlciBQb3dlcicsXG4gICAgJ0Z1biBGYWNlJyxcbiAgICAnRnVuIEZhY2VzJyxcbiAgICAnR2hvc3QnLFxuICAgICdHcmFjZWZ1bCcsXG4gICAgJ0dyYWZmaXRpJyxcbiAgICAnSW1wb3NzaWJsZScsXG4gICAgJ0lzb21ldHJpYzEnLFxuICAgICdJc29tZXRyaWMyJyxcbiAgICAnSXNvbWV0cmljMycsXG4gICAgJ0lzb21ldHJpYzQnLFxuICAgICdKUyBCcmFja2V0IExldHRlcnMnLFxuICAgICdMaWwgRGV2aWwnLFxuICAgICdNZXJsaW4xJyxcbiAgICAnTW9kdWxhcicsXG4gICAgJ09ncmUnLFxuICAgICdQYXRvcmprXFwncyBDaGVlc2UnLFxuICAgICdQYXRvcmprLUhlWCcsXG4gICAgJ1JlY3RhbmdsZXMnLFxuICAgICdTbGFudCcsXG4gICAgJ1NsYW50IFJlbGllZicsXG4gICAgJ1NtYWxsJyxcbiAgICAnU21hbGwgU2xhbnQnLFxuICAgICdTbWFsbCBJc29tZXRyaWMxJyxcbiAgICAnU29mdCcsXG4gICAgJ1N0YW5kYXJkJyxcbiAgICAnU3RhciBXYXJzJyxcbiAgICAnU3ViLVplcm8nLFxuICAgICdTd2FtcCBMYW5kJyxcbiAgICAnU3dlZXQnLFxuICAgICdUcmFpbicsXG4gICAgJ1R3aXN0ZWQnLFxuICAgICdXZXQgTGV0dGVyJyxcbiAgICAnVmFyc2l0eSdcbiAgXSxcbiAgJ0FOU0kgRklHbGV0IEZvbnRzJzogW1xuICAgICczRC1BU0NJSScsXG4gICAgJ0FOU0kgU2hhZG93JyxcbiAgICAnQmxvb2R5JyxcbiAgICAnQ2FsdmluIFMnLFxuICAgICdEZWx0YSBDb3JwcyBQcmllc3QgMScsXG4gICAgJ0VsZWN0cm9uaWMnLFxuICAgICdFbGl0ZScsXG4gICAgJ1N0cm9uZ2VyIFRoYW4gQWxsJyxcbiAgICAnVEhJUycsXG4gICAgJ1RoZSBFZGdlJ1xuICBdLFxuICAnUmVndWxhciBGSUdsZXQgRm9udHMnOiBbXG4gICAgJzFSb3cnLFxuICAgICczLUQnLFxuICAgICczeDUnLFxuICAgICc0TWF4JyxcbiAgICAnNSBMaW5lIE9ibGlxdWUnLFxuICAgICdBTUMgMyBMaW5lJyxcbiAgICAnQU1DIDMgTGl2MScsXG4gICAgJ0FNQyBBQUEwMScsXG4gICAgJ0FNQyBOZWtvJyxcbiAgICAnQU1DIFJhem9yJyxcbiAgICAnQU1DIFJhem9yMicsXG4gICAgJ0FNQyBTbGFzaCcsXG4gICAgJ0FNQyBTbGlkZXInLFxuICAgICdBTUMgVGhpbicsXG4gICAgJ0FNQyBUdWJlcycsXG4gICAgJ0FNQyBVbnRpdGxlZCcsXG4gICAgJ0FTQ0lJIE5ldyBSb21hbicsXG4gICAgJ0FsbGlnYXRvcicsXG4gICAgJ0FsbGlnYXRvcjInLFxuICAgICdBbHBoYWJldCcsXG4gICAgJ0Fycm93cycsXG4gICAgJ0Jhbm5lcicsXG4gICAgJ0Jhbm5lcjMtRCcsXG4gICAgJ0Jhbm5lcjMnLFxuICAgICdCYW5uZXI0JyxcbiAgICAnQmFyYndpcmUnLFxuICAgICdCYXNpYycsXG4gICAgJ0JlYXInLFxuICAgICdCZWxsJyxcbiAgICAnQmVuamFtaW4nLFxuICAgICdCaWcgQ2hpZWYnLFxuICAgICdCaWdmaWcnLFxuICAgICdCaW5hcnknLFxuICAgICdCbG9jaycsXG4gICAgJ0JvbGdlcicsXG4gICAgJ0JyYWNlZCcsXG4gICAgJ0JyaWdodCcsXG4gICAgJ0Jyb2Fkd2F5IEtCJyxcbiAgICAnQnJvYWR3YXknLFxuICAgICdCdWJibGUnLFxuICAgICdDYWxpZ3JhcGh5JyxcbiAgICAnQ2FsaWdyYXBoeTInLFxuICAgICdDYXR3YWxrJyxcbiAgICAnQ2h1bmt5JyxcbiAgICAnQ29pbnN0YWsnLFxuICAgICdDb2xhJyxcbiAgICAnQ29sb3NzYWwnLFxuICAgICdDb21wdXRlcicsXG4gICAgJ0NvbnRlc3NhJyxcbiAgICAnQ29udHJhc3QnLFxuICAgICdDb3NtaWtlJyxcbiAgICAnQ3Jhd2ZvcmQnLFxuICAgICdDcmlja2V0JyxcbiAgICAnQ3Vyc2l2ZScsXG4gICAgJ0N5YmVybGFyZ2UnLFxuICAgICdDeWJlcm1lZGl1bScsXG4gICAgJ0N5YmVyc21hbGwnLFxuICAgICdDeWduZXQnLFxuICAgICdEQU5DNCcsXG4gICAgJ0RXaGlzdGxlZCcsXG4gICAgJ1xcblxcbicsXG4gICAgJ0RlY2ltYWwnLFxuICAgICdEZWYgTGVwcGFyZCcsXG4gICAgJ0RpYW1vbmQnLFxuICAgICdEaWV0IENvbGEnLFxuICAgICdEaWdpdGFsJyxcbiAgICAnRG90IE1hdHJpeCcsXG4gICAgJ0RvdWJsZSBTaG9ydHMnLFxuICAgICdEb3VibGUnLFxuICAgICdEciBQZXBwZXInLFxuICAgICdFZnRpIENoZXNzJyxcbiAgICAnRWZ0aSBGb250JyxcbiAgICAnRWZ0aSBJdGFsaWMnLFxuICAgICdFZnRpIFBpdGknLFxuICAgICdFZnRpIFJvYm90JyxcbiAgICAnRWZ0aSBXYXRlcicsXG4gICAgJ0ZlbmRlcicsXG4gICAgJ0ZpbHRlcicsXG4gICAgJ0ZsaXBwZWQnLFxuICAgICdGb3VyIFRvcHMnLFxuICAgICdGcmFrdHVyJyxcbiAgICAnRnV6enknLFxuICAgICdHZW9yZ2kxNicsXG4gICAgJ0dlb3JnaWExMScsXG4gICAgJ0dob3VsaXNoJyxcbiAgICAnR2xlbnluJyxcbiAgICAnR29vZnknLFxuICAgICdHb3RoaWMnLFxuICAgICdHcmFkaWVudCcsXG4gICAgJ0dyZWVrJyxcbiAgICAnSGVhcnQgTGVmdCcsXG4gICAgJ0hlYXJ0IFJpZ2h0JyxcbiAgICAnSGVucnkgM0QnLFxuICAgICdIZXgnLFxuICAgICdIaWVyb2dseXBocycsXG4gICAgJ0hvbGx5d29vZCcsXG4gICAgJ0hvcml6b250YWwgTGVmdCcsXG4gICAgJ0hvcml6b250YWwgUmlnaHQnLFxuICAgICdJQ0wtMTkwMCcsXG4gICAgJ0ludml0YScsXG4gICAgJ1xcblxcbicsXG4gICAgJ0l0YWxpYycsXG4gICAgJ0l2cml0JyxcbiAgICAnSlMgQmxvY2sgTGV0dGVycycsXG4gICAgJ0pTIENhcGl0YWwgQ3VydmVzJyxcbiAgICAnSlMgQ3Vyc2l2ZScsXG4gICAgJ0pTIFN0aWNrIExldHRlcnMnLFxuICAgICdKYWNreScsXG4gICAgJ0phem1pbmUnLFxuICAgICdKZXJ1c2FsZW0nLFxuICAgICdLYXRha2FuYScsXG4gICAgJ0tiYW4nLFxuICAgICdLZXlib2FyZCcsXG4gICAgJ0tub2InLFxuICAgICdMQ0QnLFxuICAgICdMYXJyeSAzRCcsXG4gICAgJ0xlYW4nLFxuICAgICdMZXR0ZXJzJyxcbiAgICAnTGluZSBCbG9ja3MnLFxuICAgICdMaW51eCcsXG4gICAgJ0xvY2tlcmdub21lJyxcbiAgICAnTWFkcmlkJyxcbiAgICAnTWFycXVlZScsXG4gICAgJ01heGZvdXInLFxuICAgICdNZXJsaW4yJyxcbiAgICAnTWlrZScsXG4gICAgJ01pbmknLFxuICAgICdNaXJyb3InLFxuICAgICdNbmVtb25pYycsXG4gICAgJ01vcnNlJyxcbiAgICAnTW9zY293JyxcbiAgICAnTXNoZWJyZXcyMTAnLFxuICAgICdNdXp6bGUnLFxuICAgICdOU2NyaXB0JyxcbiAgICAnTlQgR3JlZWsnLFxuICAgICdOViBTY3JpcHQnLFxuICAgICdOYW5jeWotRmFuY3knLFxuICAgICdOYW5jeWotVW5kZXJsaW5lZCcsXG4gICAgJ05hbmN5aicsXG4gICAgJ05pcHBsZXMnLFxuICAgICdPOCcsXG4gICAgJ09TMicsXG4gICAgJ09jdGFsJyxcbiAgICAnT2xkIEJhbm5lcicsXG4gICAgJ1Bhd3AnLFxuICAgICdQZWFrcyBTbGFudCcsXG4gICAgJ1BlYWtzJyxcbiAgICAnUGViYmxlcycsXG4gICAgJ1BlcHBlcicsXG4gICAgJ1BvaXNvbicsXG4gICAgJ1B1ZmZ5JyxcbiAgICAnUHV6emxlJyxcbiAgICAnUHlyYW1pZCcsXG4gICAgJ1JhbW1zdGVpbicsXG4gICAgJ1JlbGllZicsXG4gICAgJ1JlbGllZjInLFxuICAgICdSZXZlcnNlJyxcbiAgICAnUm9tYW4nLFxuICAgICdSb3RhdGVkJyxcbiAgICAnUm91bmRlZCcsXG4gICAgJ1Jvd2FuIENhcCcsXG4gICAgJ1JvenpvJyxcbiAgICAnUnVuaWMnLFxuICAgICdSdW55YycsXG4gICAgJ1MgQmxvb2QnLFxuICAgICdTTCBTY3JpcHQnLFxuICAgICdTYW50YSBDbGFyYScsXG4gICAgJ1NjcmlwdCcsXG4gICAgJ1NlcmlmY2FwJyxcbiAgICAnU2hhZG93JyxcbiAgICAnU2hpbXJvZCcsXG4gICAgJ1Nob3J0JyxcbiAgICAnU2xpZGUnLFxuICAgICdTbWFsbCBDYXBzJyxcbiAgICAnU21hbGwgS2V5Ym9hcmQnLFxuICAgICdTbWFsbCBQb2lzb24nLFxuICAgICdTbWFsbCBTY3JpcHQnLFxuICAgICdTbWFsbCBTaGFkb3cnLFxuICAgICdTbWFsbCBUZW5nd2FyJyxcbiAgICAnU3BlZWQnLFxuICAgICdTcGxpZmYnLFxuICAgICdTdGFjZXknLFxuICAgICdTdGFtcGF0ZScsXG4gICAgJ1N0YW1wYXRlbGxvJyxcbiAgICAnU3RhciBTdHJpcHMnLFxuICAgICdTdGVsbGFyJyxcbiAgICAnU3Rmb3JlaycsXG4gICAgJ1N0aWNrIExldHRlcnMnLFxuICAgICdTdG9wJyxcbiAgICAnU3RyYWlnaHQnLFxuICAgICdTd2FuJyxcbiAgICAnVGFuamEnLFxuICAgICdUZW5nd2FyJyxcbiAgICAnVGVybScsXG4gICAgJ1Rlc3QxJyxcbiAgICAnVGhpY2snLFxuICAgICdUaGluJyxcbiAgICAnVGhvcm5lZCcsXG4gICAgJ1RocmVlIFBvaW50JyxcbiAgICAnVGlja3MgU2xhbnQnLFxuICAgICdUaWNrcycsXG4gICAgJ1RpbGVzJyxcbiAgICAnVGlua2VyLVRveScsXG4gICAgJ1RvbWJzdG9uZScsXG4gICAgJ1RyZWsnLFxuICAgICdUc2FsYWdpJyxcbiAgICAnVHVidWxhcicsXG4gICAgJ1R3byBQb2ludCcsXG4gICAgJ1VTQSBGbGFnJyxcbiAgICAnVW5pdmVycycsXG4gICAgJ1dhdnknLFxuICAgICdXZWlyZCcsXG4gICAgJ1doaW1zeScsXG4gICAgJ1dvdydcbiAgXSxcbiAgJ0FPTCBNYWNybyBGb250cyc6IFtcbiAgICAnQWJyYXhpcy1CaWcnLFxuICAgICdBYnJheGlzLVNtYWxsJyxcbiAgICAnQmVudCcsXG4gICAgJ0JsZXN0JyxcbiAgICAnQm9pZScsXG4gICAgJ0JvaWUyJyxcbiAgICAnQm9uZVxcJ3MgRm9udCcsXG4gICAgJ0NhTWlaJyxcbiAgICAnQ2VBJyxcbiAgICAnQ2VBMicsXG4gICAgJ0NoZWVzZScsXG4gICAgJ0RhaVInLFxuICAgICdGaWx0aCcsXG4gICAgJ0ZvR0cnLFxuICAgICdHYWxhY3R1cycsXG4gICAgJ0dsdWUnLFxuICAgICdIZVhcXCdzIEZvbnQnLFxuICAgICdIZWxsZmlyZScsXG4gICAgJ01lRGknLFxuICAgICdNZXInLFxuICAgICdQc1knLFxuICAgICdQc1kyJyxcbiAgICAnUmVla28gRm9udCAxJyxcbiAgICAnUmliYml0JyxcbiAgICAnUmliYml0MicsXG4gICAgJ1JpYmJpdDMnLFxuICAgICdTb255JyxcbiAgICAnVFJhQyBNaW5pJyxcbiAgICAnVFJhQyBUaW55JyxcbiAgICAnVFJhQ1xcJ3MgT2xkIFNjaG9vbCBGb250JyxcbiAgICAnVFJhQycsXG4gICAgJ1R3aWdneScsXG4gICAgJ1gtUG9zZScsXG4gICAgJ1g5OScsXG4gICAgJ1g5OTInLFxuICAgICdab2RpJ1xuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvbnRJbmRleCJdfQ==