

import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2;

const searchModalStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '90%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    paddingRight: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#F0F3FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
    marginBottom: 10,
  },
  discoverCard: {
    width: width * 0.4,
    marginRight: 15,
  },
  discoverImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  discoverDescription: {
    marginTop: 6,
    fontSize: 14,
  },
  discoverPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});



export default searchModalStyles;
