
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = 100;

const saleSelectionStyles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  bigSaleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F9C74F',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
  },
  bigSaleTextContainer: {
    flex: 1,
  },
  bigSaleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  bigSaleSubtitle: {
    fontSize: 16,
    marginVertical: 8,
    color: '#000',
  },
  bigSaleButton: {
    backgroundColor: '#0066FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  bigSaleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bigSaleImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginLeft: 16,
  },
  mostPopularContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
  popularList: {
    paddingLeft: 4,
  },
  popularItem: {
    width: CARD_WIDTH,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  popularImage: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 12,
  },
  popularLabelContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  popularLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  likesText: {
    marginLeft: 4,
    color: '#0066FF',
    fontWeight: 'bold',
  },
  newArrivalsContainer: {
    marginBottom: 24,
  },
  newArrivalsList: {
    paddingLeft: 4,
  },
  newArrivalItem: {
    width: CARD_WIDTH,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
  },
  newArrivalImage: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: 12,
  },
  newArrivalDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
});



export default saleSelectionStyles;
