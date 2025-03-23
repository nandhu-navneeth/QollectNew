import React, { useState, useCallback, useRef } from 'react';
import { 
  View, FlatList, Text, StyleSheet, TextInput, TouchableOpacity, 
  KeyboardAvoidingView, Platform, Animated, ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Colors from '../../constant/Colors';
import { IT_SUBJECTS } from '../../config/subjectsData';

// Default Scheme
const DEFAULT_SCHEME = '2023';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedScheme, setSelectedScheme] = useState(DEFAULT_SCHEME);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const router = useRouter();
  const scaleValue = useRef(new Animated.Value(1)).current;

  // Get subjects based on selected scheme
  const getSubjects = (scheme) => {
    return Object.entries(IT_SUBJECTS[scheme] || {}).flatMap(([semester, subjects]) =>
      subjects.map(subject => ({ ...subject, semester }))
    );
  };

  // Update filtered subjects when scheme changes
  const updateSubjects = (scheme) => {
    setFilteredSubjects(getSubjects(scheme));
  };

  // Load subjects initially
  React.useEffect(() => {
    updateSubjects(selectedScheme);
  }, [selectedScheme]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const allSubjects = getSubjects(selectedScheme);
    const filtered = allSubjects.filter((subject) =>
      subject.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSubjects(filtered);
  };

  const handleSubjectPress = useCallback((subject) => {
    Animated.sequence([
      Animated.timing(scaleValue, { toValue: 0.95, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleValue, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start(() => {
      router.push({
        pathname: '/semester/subject/[id]',
        params: { id: subject.id, semester: subject.semester, subjectName: subject.name }
      });
    });
  }, [router]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      
      {/* Scheme Selector */}
      <View style={styles.schemeContainer}>
        <TouchableOpacity
          style={[styles.schemeButton, selectedScheme === '2019' && styles.schemeButtonActive]}
          onPress={() => {
            setSelectedScheme('2019');
            updateSubjects('2019');
          }}
        >
          <Text style={[styles.schemeText, selectedScheme === '2019' && styles.schemeTextActive]}>
            Scheme 2019
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.schemeButton, selectedScheme === '2023' && styles.schemeButtonActive]}
          onPress={() => {
            setSelectedScheme('2023');
            updateSubjects('2023');
          }}
        >
          <Text style={[styles.schemeText, selectedScheme === '2023' && styles.schemeTextActive]}>
            Scheme 2023
          </Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={24} color={Colors.PRIMARY} />
        <TextInput
          style={styles.input}
          placeholder="Search subjects..."
          placeholderTextColor={Colors.GRAY}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* Subject List */}
      {filteredSubjects.length > 0 ? (
        <FlatList
          data={filteredSubjects}
          keyExtractor={(item) => `${item.semester}-${item.id}`}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSubjectPress(item)} activeOpacity={0.7}>
              <Animated.View style={[styles.itemContainer, { transform: [{ scale: scaleValue }] }]}>
                <Text style={styles.subjectName}>{item.name}</Text>
                <Text style={styles.semesterText}>Semester: {item.semester}</Text>
              </Animated.View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="sad-outline" size={50} color={Colors.GRAY} />
          <Text style={styles.emptyText}>No subjects found</Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: Colors.BACKGROUND,
  },
  schemeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#f3f3f3',
    padding: 5,
    borderRadius: 15,
  },
  schemeButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  schemeButtonActive: {
    backgroundColor: Colors.PRIMARY,
  },
  schemeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  schemeTextActive: {
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: Colors.TEXT_PRIMARY,
  },
  itemContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: Colors.PRIMARY,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.TEXT_PRIMARY,
  },
  semesterText: {
    fontSize: 14,
    color: Colors.TEXT_SECONDARY,
    marginTop: 4,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.TEXT_SECONDARY,
    marginTop: 10,
  },
});

export default SearchScreen;
