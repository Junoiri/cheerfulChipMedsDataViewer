import React, {useRef} from 'react';
import { ScrollView, TouchableOpacity, ImageBackground, Text, View, StyleSheet } from 'react-native';


const App = () => {
  const tableHead = ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5', 'Column 6', 'Column 7'];
  const tableData = [
  ['Row 1 Item 1', 'Row 1 Item 2', 'Row 1 Item 3', 'Row 1 Item 4', 'Row 1 Item 5', 'Row 1 Item 6', 'Row 1 Item 7'],
  ['Row 2 Item 1', 'Row 2 Item 2', 'Row 2 Item 3', 'Row 2 Item 4', 'Row 2 Item 5', 'Row 2 Item 6', 'Row 2 Item 7'],
  ['Row 3 Item 1', 'Row 3 Item 2', 'Row 3 Item 3', 'Row 3 Item 4', 'Row 3 Item 5', 'Row 3 Item 6', 'Row 3 Item 7'],
  ['Row 4 Item 1', 'Row 4 Item 2', 'Row 4 Item 3', 'Row 4 Item 4', 'Row 4 Item 5', 'Row 4 Item 6', 'Row 4 Item 7'],
  ['Row 5 Item 1', 'Row 5 Item 2', 'Row 5 Item 3', 'Row 5 Item 4', 'Row 5 Item 5', 'Row 5 Item 6', 'Row 5 Item 7'],
  ['Row 6 Item 1', 'Row 6 Item 2', 'Row 6 Item 3', 'Row 6 Item 4', 'Row 6 Item 5', 'Row 6 Item 6', 'Row 6 Item 7'],
  ['Row 7 Item 1', 'Row 7 Item 2', 'Row 7 Item 3', 'Row 7 Item 4', 'Row 7 Item 5', 'Row 7 Item 6', 'Row 7 Item 7'],
  ['Row 8 Item 1', 'Row 8 Item 2', 'Row 8 Item 3', 'Row 8 Item 4', 'Row 8 Item 5', 'Row 8 Item 6', 'Row 8 Item 7'],
  ['Row 9 Item 1', 'Row 9 Item 2', 'Row 9 Item 3', 'Row 9 Item 4', 'Row 9 Item 5', 'Row 9 Item 6', 'Row 9 Item 7'],
  ['Row 10 Item 1', 'Row 10 Item 2', 'Row 10 Item 3', 'Row 10 Item 4', 'Row 10 Item 5', 'Row 10 Item 6', 'Row 10 Item 7'],
  ['Row 11 Item 1', 'Row 11 Item 2', 'Row 11 Item 3', 'Row 11 Item 4', 'Row 11 Item 5', 'Row 11 Item 6', 'Row 11 Item 7'],
  ['Row 12 Item 1', 'Row 12 Item 2', 'Row 12 Item 3', 'Row 12 Item 4', 'Row 12 Item 5', 'Row 12 Item 6', 'Row 12 Item 7'],
  ['Row 13 Item 1', 'Row 13 Item 2', 'Row 13 Item 3', 'Row 13 Item 4', 'Row 13 Item 5', 'Row 13 Item 6', 'Row 13 Item 7'],
  ['Row 14 Item 1', 'Row 14 Item 2', 'Row 14 Item 3', 'Row 14 Item 4', 'Row 14 Item 5', 'Row 14 Item 6', 'Row 14 Item 7'],
  ['Row 15 Item 1', 'Row 15 Item 2', 'Row 15 Item 3', 'Row 15 Item 4', 'Row 15 Item 5', 'Row 15 Item 6', 'Row 15 Item 7'],
  ['Row 16 Item 1', 'Row 16 Item 2', 'Row 16 Item 3', 'Row 16 Item 4', 'Row 16 Item 5', 'Row 16 Item 6', 'Row 16 Item 7'],
  ['Row 17 Item 1', 'Row 17 Item 2', 'Row 17 Item 3', 'Row 17 Item 4', 'Row 17 Item 5', 'Row 17 Item 6', 'Row 17 Item 7'],
  ['Row 18 Item 1', 'Row 18 Item 2', 'Row 18 Item 3', 'Row 18 Item 4', 'Row 18 Item 5', 'Row 18 Item 6', 'Row 18 Item 7'],
  ['Row 19 Item 1', 'Row 19 Item 2', 'Row 19 Item 3', 'Row 19 Item 4', 'Row 19 Item 5', 'Row 19 Item 6', 'Row 19 Item 7'],
  ['Row 20 Item 1', 'Row 20 Item 2', 'Row 20 Item 3', 'Row 20 Item 4', 'Row 20 Item 5', 'Row 20 Item 6', 'Row 20 Item 7'],
  ['Row 21 Item 1', 'Row 21 Item 2', 'Row 21 Item 3', 'Row 21 Item 4', 'Row 21 Item 5', 'Row 21 Item 6', 'Row 21 Item 7'],
  ['Row 22 Item 1', 'Row 22 Item 2', 'Row 22 Item 3', 'Row 22 Item 4', 'Row 22 Item 5', 'Row 22 Item 6', 'Row 22 Item 7'],
  ['Row 23 Item 1', 'Row 23 Item 2', 'Row 23 Item 3', 'Row 23 Item 4', 'Row 23 Item 5', 'Row 23 Item 6', 'Row 23 Item 7'],
  ['Row 24 Item 1', 'Row 24 Item 2', 'Row 24 Item 3', 'Row 24 Item 4', 'Row 24 Item 5', 'Row 24 Item 6', 'Row 24 Item 7'],
  ['Row 25 Item 1', 'Row 25 Item 2', 'Row 25 Item 3', 'Row 25 Item 4', 'Row 25 Item 5', 'Row 25 Item 6', 'Row 25 Item 7'],
  ['Row 26 Item 1', 'Row 26 Item 2', 'Row 26 Item 3', 'Row 26 Item 4', 'Row 26 Item 5', 'Row 26 Item 6', 'Row 26 Item 7'],
  ['Row 27 Item 1', 'Row 27 Item 2', 'Row 27 Item 3', 'Row 27 Item 4', 'Row 27 Item 5', 'Row 27 Item 6', 'Row 27 Item 7'],
  ['Row 28 Item 1', 'Row 28 Item 2', 'Row 28 Item 3', 'Row 28 Item 4', 'Row 28 Item 5', 'Row 28 Item 6', 'Row 28 Item 7'],
  ['Row 29 Item 1', 'Row 29 Item 2', 'Row 29 Item 3', 'Row 29 Item 4', 'Row 29 Item 5', 'Row 29 Item 6', 'Row 29 Item 7'],
  ['Row 30 Item 1', 'Row 30 Item 2', 'Row 30 Item 3', 'Row 30 Item 4', 'Row 30 Item 5', 'Row 30 Item 6', 'Row 30 Item 7'],
  ['Row 31 Item 1', 'Row 31 Item 2', 'Row 31 Item 3', 'Row 31 Item 4', 'Row 31 Item 5', 'Row 31 Item 6', 'Row 31 Item 7'],
  ['Row 32 Item 1', 'Row 32 Item 2', 'Row 32 Item 3', 'Row 32 Item 4', 'Row 32 Item 5', 'Row 32 Item 6', 'Row 32 Item 7'],
  ['Row 33 Item 1', 'Row 33 Item 2', 'Row 33 Item 3', 'Row 33 Item 4', 'Row 33 Item 5', 'Row 33 Item 6', 'Row 33 Item 7'],
  ['Row 34 Item 1', 'Row 34 Item 2', 'Row 34 Item 3', 'Row 34 Item 4', 'Row 34 Item 5', 'Row 34 Item 6', 'Row 34 Item 7'],
  ['Row 35 Item 1', 'Row 35 Item 2', 'Row 35 Item 3', 'Row 35 Item 4', 'Row 35 Item 5', 'Row 35 Item 6', 'Row 35 Item 7'],
  ['Row 36 Item 1', 'Row 36 Item 2', 'Row 36 Item 3', 'Row 36 Item 4', 'Row 36 Item 5', 'Row 36 Item 6', 'Row 36 Item 7'],
  ['Row 37 Item 1', 'Row 37 Item 2', 'Row 37 Item 3', 'Row 37 Item 4', 'Row 37 Item 5', 'Row 37 Item 6', 'Row 37 Item 7'],
  ['Row 38 Item 1', 'Row 38 Item 2', 'Row 38 Item 3', 'Row 38 Item 4', 'Row 38 Item 5', 'Row 38 Item 6', 'Row 38 Item 7'],
  ['Row 39 Item 1', 'Row 39 Item 2', 'Row 39 Item 3', 'Row 39 Item 4', 'Row 39 Item 5', 'Row 39 Item 6', 'Row 39 Item 7'],
  ['Row 40 Item 1', 'Row 40 Item 2', 'Row 40 Item 3', 'Row 40 Item 4', 'Row 40 Item 5', 'Row 40 Item 6', 'Row 40 Item 7'],
  ['Row 41 Item 1', 'Row 41 Item 2', 'Row 41 Item 3', 'Row 41 Item 4', 'Row 41 Item 5', 'Row 41 Item 6', 'Row 41 Item 7'],
  ['Row 42 Item 1', 'Row 42 Item 2', 'Row 42 Item 3', 'Row 42 Item 4', 'Row 42 Item 5', 'Row 42 Item 6', 'Row 42 Item 7'],
  ['Row 43 Item 1', 'Row 43 Item 2', 'Row 43 Item 3', 'Row 43 Item 4', 'Row 43 Item 5', 'Row 43 Item 6', 'Row 43 Item 7'],
  ['Row 44 Item 1', 'Row 44 Item 2', 'Row 44 Item 3', 'Row 44 Item 4', 'Row 44 Item 5', 'Row 44 Item 6', 'Row 44 Item 7'],
  ['Row 45 Item 1', 'Row 45 Item 2', 'Row 45 Item 3', 'Row 45 Item 4', 'Row 45 Item 5', 'Row 45 Item 6', 'Row 45 Item 7'],
  ['Row 46 Item 1', 'Row 46 Item 2', 'Row 46 Item 3', 'Row 46 Item 4', 'Row 46 Item 5', 'Row 46 Item 6', 'Row 46 Item 7'],
  ['Row 47 Item 1', 'Row 47 Item 2', 'Row 47 Item 3', 'Row 47 Item 4', 'Row 47 Item 5', 'Row 47 Item 6', 'Row 47 Item 7'],
  ['Row 48 Item 1', 'Row 48 Item 2', 'Row 48 Item 3', 'Row 48 Item 4', 'Row 48 Item 5', 'Row 48 Item 6', 'Row 48 Item 7'],
  ['Row 49 Item 1', 'Row 49 Item 2', 'Row 49 Item 3', 'Row 49 Item 4', 'Row 49 Item 5', 'Row 49 Item 6', 'Row 49 Item 7'],
  ['Row 50 Item 1', 'Row 50 Item 2', 'Row 50 Item 3', 'Row 50 Item 4', 'Row 50 Item 5', 'Row 50 Item 6', 'Row 50 Item 7'],
  ['Row 51 Item 1', 'Row 51 Item 2', 'Row 51 Item 3', 'Row 51 Item 4', 'Row 51 Item 5', 'Row 51 Item 6', 'Row 51 Item 7'],
  ['Row 52 Item 1', 'Row 52 Item 2', 'Row 52 Item 3', 'Row 52 Item 4', 'Row 52 Item 5', 'Row 52 Item 6', 'Row 52 Item 7'],
  ['Row 53 Item 1', 'Row 53 Item 2', 'Row 53 Item 3', 'Row 53 Item 4', 'Row 53 Item 5', 'Row 53 Item 6', 'Row 53 Item 7'],
  ['Row 54 Item 1', 'Row 54 Item 2', 'Row 54 Item 3', 'Row 54 Item 4', 'Row 54 Item 5', 'Row 54 Item 6', 'Row 54 Item 7'],
  ['Row 55 Item 1', 'Row 55 Item 2', 'Row 55 Item 3', 'Row 55 Item 4', 'Row 55 Item 5', 'Row 55 Item 6', 'Row 55 Item 7'],
  ['Row 56 Item 1', 'Row 56 Item 2', 'Row 56 Item 3', 'Row 56 Item 4', 'Row 56 Item 5', 'Row 56 Item 6', 'Row 56 Item 7'],
  ['Row 57 Item 1', 'Row 57 Item 2', 'Row 57 Item 3', 'Row 57 Item 4', 'Row 57 Item 5', 'Row 57 Item 6', 'Row 57 Item 7'],
  ['Row 58 Item 1', 'Row 58 Item 2', 'Row 58 Item 3', 'Row 58 Item 4', 'Row 58 Item 5', 'Row 58 Item 6', 'Row 58 Item 7'],
  ['Row 59 Item 1', 'Row 59 Item 2', 'Row 59 Item 3', 'Row 59 Item 4', 'Row 59 Item 5', 'Row 59 Item 6', 'Row 59 Item 7'],
  ['Row 60 Item 1', 'Row 60 Item 2', 'Row 60 Item 3', 'Row 60 Item 4', 'Row 60 Item 5', 'Row 60 Item 6', 'Row 60 Item 7'],
  ['Row 61 Item 1', 'Row 61 Item 2', 'Row 61 Item 3', 'Row 61 Item 4', 'Row 61 Item 5', 'Row 61 Item 6', 'Row 61 Item 7'],
  ['Row 62 Item 1', 'Row 62 Item 2', 'Row 62 Item 3', 'Row 62 Item 4', 'Row 62 Item 5', 'Row 62 Item 6', 'Row 62 Item 7'],
  ['Row 63 Item 1', 'Row 63 Item 2', 'Row 63 Item 3', 'Row 63 Item 4', 'Row 63 Item 5', 'Row 63 Item 6', 'Row 63 Item 7'],
  ['Row 64 Item 1', 'Row 64 Item 2', 'Row 64 Item 3', 'Row 64 Item 4', 'Row 64 Item 5', 'Row 64 Item 6', 'Row 64 Item 7'],
  ['Row 65 Item 1', 'Row 65 Item 2', 'Row 65 Item 3', 'Row 65 Item 4', 'Row 65 Item 5', 'Row 65 Item 6', 'Row 65 Item 7'],
  ['Row 66 Item 1', 'Row 66 Item 2', 'Row 66 Item 3', 'Row 66 Item 4', 'Row 66 Item 5', 'Row 66 Item 6', 'Row 66 Item 7'],
  ['Row 67 Item 1', 'Row 67 Item 2', 'Row 67 Item 3', 'Row 67 Item 4', 'Row 67 Item 5', 'Row 67 Item 6', 'Row 67 Item 7'],
  ['Row 68 Item 1', 'Row 68 Item 2', 'Row 68 Item 3', 'Row 68 Item 4', 'Row 68 Item 5', 'Row 68 Item 6', 'Row 68 Item 7'],
  ['Row 69 Item 1', 'Row 69 Item 2', 'Row 69 Item 3', 'Row 69 Item 4', 'Row 69 Item 5', 'Row 69 Item 6', 'Row 69 Item 7'],
  ['Row 70 Item 1', 'Row 70 Item 2', 'Row 70 Item 3', 'Row 70 Item 4', 'Row 70 Item 5', 'Row 70 Item 6', 'Row 70 Item 7'],
  ['Row 71 Item 1', 'Row 71 Item 2', 'Row 71 Item 3', 'Row 71 Item 4', 'Row 71 Item 5', 'Row 71 Item 6', 'Row 71 Item 7'],
  ['Row 72 Item 1', 'Row 72 Item 2', 'Row 72 Item 3', 'Row 72 Item 4', 'Row 72 Item 5', 'Row 72 Item 6', 'Row 72 Item 7'],
  ['Row 73 Item 1', 'Row 73 Item 2', 'Row 73 Item 3', 'Row 73 Item 4', 'Row 73 Item 5', 'Row 73 Item 6', 'Row 73 Item 7'],
  ['Row 74 Item 1', 'Row 74 Item 2', 'Row 74 Item 3', 'Row 74 Item 4', 'Row 74 Item 5', 'Row 74 Item 6', 'Row 74 Item 7'],
  ['Row 75 Item 1', 'Row 75 Item 2', 'Row 75 Item 3', 'Row 75 Item 4', 'Row 75 Item 5', 'Row 75 Item 6', 'Row 75 Item 7'],
  ['Row 76 Item 1', 'Row 76 Item 2', 'Row 76 Item 3', 'Row 76 Item 4', 'Row 76 Item 5', 'Row 76 Item 6', 'Row 76 Item 7'],
  ['Row 77 Item 1', 'Row 77 Item 2', 'Row 77 Item 3', 'Row 77 Item 4', 'Row 77 Item 5', 'Row 77 Item 6', 'Row 77 Item 7'],
  ['Row 78 Item 1', 'Row 78 Item 2', 'Row 78 Item 3', 'Row 78 Item 4', 'Row 78 Item 5', 'Row 78 Item 6', 'Row 78 Item 7'],
  ['Row 79 Item 1', 'Row 79 Item 2', 'Row 79 Item 3', 'Row 79 Item 4', 'Row 79 Item 5', 'Row 79 Item 6', 'Row 79 Item 7'],
  ['Row 80 Item 1', 'Row 80 Item 2', 'Row 80 Item 3', 'Row 80 Item 4', 'Row 80 Item 5', 'Row 80 Item 6', 'Row 80 Item 7'],
  ['Row 81 Item 1', 'Row 81 Item 2', 'Row 81 Item 3', 'Row 81 Item 4', 'Row 81 Item 5', 'Row 81 Item 6', 'Row 81 Item 7'],
  ['Row 82 Item 1', 'Row 82 Item 2', 'Row 82 Item 3', 'Row 82 Item 4', 'Row 82 Item 5', 'Row 82 Item 6', 'Row 82 Item 7'],
  ['Row 83 Item 1', 'Row 83 Item 2', 'Row 83 Item 3', 'Row 83 Item 4', 'Row 83 Item 5', 'Row 83 Item 6', 'Row 83 Item 7'],
  ['Row 84 Item 1', 'Row 84 Item 2', 'Row 84 Item 3', 'Row 84 Item 4', 'Row 84 Item 5', 'Row 84 Item 6', 'Row 84 Item 7'],
  ['Row 85 Item 1', 'Row 85 Item 2', 'Row 85 Item 3', 'Row 85 Item 4', 'Row 85 Item 5', 'Row 85 Item 6', 'Row 85 Item 7'],
  ['Row 86 Item 1', 'Row 86 Item 2', 'Row 86 Item 3', 'Row 86 Item 4', 'Row 86 Item 5', 'Row 86 Item 6', 'Row 86 Item 7'],
  ['Row 87 Item 1', 'Row 87 Item 2', 'Row 87 Item 3', 'Row 87 Item 4', 'Row 87 Item 5', 'Row 87 Item 6', 'Row 87 Item 7'],
  ['Row 88 Item 1', 'Row 88 Item 2', 'Row 88 Item 3', 'Row 88 Item 4', 'Row 88 Item 5', 'Row 88 Item 6', 'Row 88 Item 7'],
  ['Row 89 Item 1', 'Row 89 Item 2', 'Row 89 Item 3', 'Row 89 Item 4', 'Row 89 Item 5', 'Row 89 Item 6', 'Row 89 Item 7'],
  ['Row 90 Item 1', 'Row 90 Item 2', 'Row 90 Item 3', 'Row 90 Item 4', 'Row 90 Item 5', 'Row 90 Item 6', 'Row 90 Item 7'],
  ['Row 91 Item 1', 'Row 91 Item 2', 'Row 91 Item 3', 'Row 91 Item 4', 'Row 91 Item 5', 'Row 91 Item 6', 'Row 91 Item 7'],
  ['Row 92 Item 1', 'Row 92 Item 2', 'Row 92 Item 3', 'Row 92 Item 4', 'Row 92 Item 5', 'Row 92 Item 6', 'Row 92 Item 7'],
  ['Row 93 Item 1', 'Row 93 Item 2', 'Row 93 Item 3', 'Row 93 Item 4', 'Row 93 Item 5', 'Row 93 Item 6', 'Row 93 Item 7'],
  ['Row 94 Item 1', 'Row 94 Item 2', 'Row 94 Item 3', 'Row 94 Item 4', 'Row 94 Item 5', 'Row 94 Item 6', 'Row 94 Item 7'],
  ['Row 95 Item 1', 'Row 95 Item 2', 'Row 95 Item 3', 'Row 95 Item 4', 'Row 95 Item 5', 'Row 95 Item 6', 'Row 95 Item 7'],
  ['Row 96 Item 1', 'Row 96 Item 2', 'Row 96 Item 3', 'Row 96 Item 4', 'Row 96 Item 5', 'Row 96 Item 6', 'Row 96 Item 7'],
  ['Row 97 Item 1', 'Row 97 Item 2', 'Row 97 Item 3', 'Row 97 Item 4', 'Row 97 Item 5', 'Row 97 Item 6', 'Row 97 Item 7'],
  ['Row 98 Item 1', 'Row 98 Item 2', 'Row 98 Item 3', 'Row 98 Item 4', 'Row 98 Item 5', 'Row 98 Item 6', 'Row 98 Item 7'],
  ['Row 99 Item 1', 'Row 99 Item 2', 'Row 99 Item 3', 'Row 99 Item 4', 'Row 99 Item 5', 'Row 99 Item 6', 'Row 99 Item 7'],
  ['Row 100 Item 1', 'Row 100 Item 2', 'Row 100 Item 3', 'Row 100 Item 4', 'Row 100 Item 5', 'Row 100 Item 6', 'Row 100 Item 7']
];


  const scrollViewRef = useRef<ScrollView>(null);
  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <ImageBackground
        source={require('./assets/images/header_background.jpeg')}
        resizeMode="cover"
        style={styles.header}
      >
        <Text style={styles.headerText}>Welcome to Cheerful Chip Meds Data Viewer!</Text>
      </ImageBackground>
      <TouchableOpacity style={styles.refreshContainer}>
        <Text style={styles.refreshText}>REFRESH</Text>
      </TouchableOpacity>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          {tableHead.map((headerItem, index) => (
            <Text key={index} style={styles.headerItem}>{headerItem}</Text>
          ))}
        </View>
        {tableData.map((rowData, index) => (
          <View key={index} style={styles.tableRow}>
            {rowData.map((cellData, cellIndex) => (
              <Text key={cellIndex} style={styles.rowItem}>{cellData}</Text>
            ))}
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.backToTopContainer} onPress={scrollToTop}>
        <Text style={styles.backToTopText}>BACK TO TOP</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  refreshContainer: {
    marginTop: 20, // Adjust as needed for spacing
    marginBottom: 20, // Adjust as needed for spacing
    alignSelf: 'center', // Centers the button horizontally
    borderWidth: 1, // Width of the border around the button
    borderColor: 'black', // Color of the border
    borderRadius: 4, // Optional: if you want rounded corners
    paddingVertical: 8, // Padding inside the button
    paddingHorizontal: 16, // Padding inside the button
    backgroundColor: 'white', // Background color of the button
  },
  refreshText: {
    fontWeight: 'bold', // Makes the text bold
    fontSize: 16, // Sets the size of the font
    color: 'black', // Color of the text
  },
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e', // Dark grey background color
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
tableContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingBottom: 8,
  },
  headerItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  rowItem: {
    fontSize: 14,
    color: '#fff', // Text color changed to white to contrast against the dark background
  },
  backToTopContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  backToTopText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});

export default App;
