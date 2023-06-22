<ScrollView>
          {typedTextList.map((text, index) => (
            <TouchableOpacity
              key={index}
              onLongPress={() => handleLongPress(index)}
              onPress={() => console.log('Item pressed')}
            >
              <View style={styles.noteContainer}>
                {selectedItems.includes(index) && <View style={styles.checkbox} />}
                <Text style={styles.noteText}>{text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>